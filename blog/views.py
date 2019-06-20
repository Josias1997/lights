from .models import Article, Category, Picture, Offer, AboutMe
from .serializers import ArticleSerializer, CategorySerializer, PictureSerializer, OfferSerializer, AboutMeSerializer
from rest_framework.generics import GenericAPIView, RetrieveAPIView, ListAPIView
from rest_framework.mixins import ListModelMixin
# Create your views here.


class ArticleListView(ListModelMixin, GenericAPIView):
    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class SingleArticleView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class CategoryListView(ListModelMixin, GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class PicturesPerCategoryView(ListAPIView):
    serializer_class = PictureSerializer

    def get_queryset(self):
        category_id = self.kwargs['pk']
        return Picture.objects.filter(category__id=category_id).order_by('-created_at')


class PictureListView(ListAPIView):
    queryset = Picture.objects.all().order_by('-created_at')
    serializer_class = PictureSerializer


class SinglePictureView(RetrieveAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


class OfferListView(ListModelMixin, GenericAPIView):
    queryset = Offer.objects.all().order_by('-created_at')
    serializer_class = OfferSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class SingleOfferView(RetrieveAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer


class AboutMeView(RetrieveAPIView):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer
