from django.contrib import admin
from .models import Article, Category, Picture, Offer, Content
# Register your models here.

admin.site.register(Content)
admin.site.register(Article)
admin.site.register(Category)
admin.site.register(Picture)
admin.site.register(Offer)
