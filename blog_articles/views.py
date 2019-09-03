from django.shortcuts import render, \
    get_object_or_404, redirect, HttpResponseRedirect
from django.views.generic import ListView, DetailView
from django.views.generic.list import MultipleObjectMixin
from .models import Article, NewsletterUser, BlogTheme
from .forms import CommentForm, NewsletterSignUpForm
from django.utils import timezone
from .serializers import ArticleSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from django.contrib import messages
from django.core.mail import send_mass_mail, send_mail
from django.conf import settings
from helpers.helpers import filter
from django.db.models import Q
# Create your views here.


class HomeView(ListView):
    model = Article
    template_name = 'articles/index.html'
    paginate_by = 5
    context_object_name = 'articles_list'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        blog_theme = BlogTheme.objects.all()[0]
        articles = Article.objects.filter(is_visible=True)
        context['blog_theme'] = blog_theme
        context['articles_list'] = articles
        return context



def get_article_details(request, slug):
    article = get_object_or_404(Article, slug=slug)
    tags = article.meta_keywords.split(" ")
    articles = Article.objects.filter(~Q(title=article.title)).order_by('-created_at')
    related_articles = filter(articles, tags)
    return render(request, 'articles/post.html', {
        'article': article,
        'related_articles': related_articles,
    })


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

