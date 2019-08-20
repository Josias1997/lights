from django.shortcuts import render

# Create your views here.


def get_articles(request):
    return render(request, 'articles/articles.html')
