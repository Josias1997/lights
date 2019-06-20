from rest_framework import serializers
from .models import Article, Category, Picture, Offer, AboutMe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'


class PictureSerializer(serializers.ModelSerializer):
    category = CategorySerializer(required=True)

    class Meta:
        model = Picture
        fields = '__all__'


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'


class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = '__all__'
