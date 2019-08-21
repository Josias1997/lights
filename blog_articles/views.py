from django.shortcuts import render

# Create your views here.


def get_articles(request):
    return render(request, 'articles/home.html')


def get_details(request, slug):
    return render(request, 'articles/post-page.html')
