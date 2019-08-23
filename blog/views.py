from .models import Category, Picture, Offer, AboutMe
from .serializers import CategorySerializer, PictureSerializer, OfferSerializer, AboutMeSerializer
from rest_framework.generics import GenericAPIView, RetrieveAPIView, ListAPIView
from rest_framework.mixins import ListModelMixin
# Create your views here.


class CategoryListView(ListModelMixin, GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class PictureListView(ListAPIView):
    queryset = Picture.objects.filter(is_visible=True).order_by('-created_at')
    serializer_class = PictureSerializer


class SinglePictureView(RetrieveAPIView):
    queryset = Picture.objects.filter(is_visible=True)
    serializer_class = PictureSerializer


class OfferListView(ListModelMixin, GenericAPIView):
    queryset = Offer.objects.filter(is_visible=True).order_by('-created_at')
    serializer_class = OfferSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class SingleOfferView(RetrieveAPIView):
    queryset = Offer.objects.filter(is_visible=True)
    serializer_class = OfferSerializer


class AboutListView(ListModelMixin, GenericAPIView):
    queryset = AboutMe.objects.all().order_by('-created_at')
    serializer_class = AboutMeSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
