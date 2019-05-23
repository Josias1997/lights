from .models import Article, Category, Picture, Offer
from .serializers import ArticleSerializer, CategorySerializer, PictureSerializer, OfferSerializer
from rest_framework import generics
from rest_framework.decorators import APIView
from rest_framework.response import Response
# Create your views here.


class ArticleListCreate(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class CategoryListCreate(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PictureListCreate(generics.ListAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


class OfferListCreate(generics.ListAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
