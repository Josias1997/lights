from django.shortcuts import render, get_object_or_404, redirect, HttpResponse
from django.views.generic import ListView, DetailView
from .models import Article
from .forms import CommentForm
from django.utils import timezone
from .serializers import ArticleSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
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
        context['form'] = form
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
