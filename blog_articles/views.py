from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from .models import Article

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

