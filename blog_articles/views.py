from django.shortcuts import render, \
    get_object_or_404, redirect, HttpResponseRedirect
from django.views.generic import ListView, DetailView
from .models import Article, NewsletterUser
from .forms import CommentForm, NewsletterSignUpForm
from django.utils import timezone
from .serializers import ArticleSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from django.contrib import messages
from django.core.mail import send_mass_mail, send_mail
from django.conf import settings
# Create your views here.


class HomeView(ListView):
    model = Article
    template_name = 'articles/home.html'
    paginate_by = 6
    context_object_name = 'articles_list'


class ArticleDetailView(DetailView):
    model = Article
    template_name = 'articles/post-page.html'
    context_object_name = 'article'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        related_articles = Article.objects.filter(title__icontains=context['article'].meta_keywords)[0:3]
        context['related_articles'] = related_articles
        form = CommentForm()
        newsletter_signup_form = NewsletterSignUpForm()
        context['form'] = form
        context['newsletter_signup_form'] = newsletter_signup_form
        return context


def add_comment(request, slug):
    article = get_object_or_404(Article, slug=slug)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.article = article
            comment.created_at = timezone.now()
            comment.save()
            return redirect('article_details', slug)


class ArticleListView(ListModelMixin, GenericAPIView):
    queryset = Article.objects.filter(is_visible=True)[0:3]
    serializer_class = ArticleSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


def newsletter_signup(request):
    if request.method == "POST":
        user_info = NewsletterSignUpForm(request.POST)
        if user_info.is_valid():
            next_page = request.POST.get('next', '/blog')
            user_instance = user_info.save(commit=False)
            if NewsletterUser.objects.filter(email=user_instance.email).exists():
                messages.warning(request, "L'email existe déjà")
            else:
                user_instance.save()
                messages.success(request, "Abonnement réussi")
                subject = "Merci de vous abonner à notre newsletter"
                from_email = settings.EMAIL_HOST_USER
                to_email = [user_instance.email]
                signup_message = """Bienvenue dans la newletter de LightsPhotography.
                Pour vous désabonner visiter http://localhost:8000/blog/newsletter/unsubscribe
                """
                send_mail(subject=subject, from_email=from_email, recipient_list=to_email,
                          message=signup_message,
                          fail_silently=False)
    return HttpResponseRedirect(next_page)


def newsletter_unsubscribe(request):
    unsubscribe_form = NewsletterSignUpForm(request.POST or None)
    if unsubscribe_form.is_valid():
        user_instance = unsubscribe_form.save(commit=False)
        if NewsletterUser.objects.filter(email=user_instance.email).exists():
            NewsletterUser.objects.filter(email=user_instance.email).delete()
            messages.success(request, "Vous vous êtes désabonnés avec succès")
        else:
            messages.warning(request, "Cet email n'existe pas")

    return render(request, 'articles/unsubscribe.html', {
        'form': unsubscribe_form
    })
