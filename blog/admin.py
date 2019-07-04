from django.contrib import admin
from .models import Article, Category, Picture, Offer, Content, AboutMe
# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'is_visible', 'image']
    list_filter = ['created_at', 'is_visible']
    list_editable = ['is_visible', 'image']


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    list_filter = ['name']


class OfferAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'is_visible', 'image', 'price']
    list_filter = ['created_at', 'is_visible', 'price']
    list_editable = ['is_visible', 'image', 'price']


class PictureAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'is_visible', 'image']
    list_filter = ['created_at', 'is_visible']
    list_editable = ['is_visible', 'image']


class AboutMeAdmin(admin.ModelAdmin):
    list_display = ['firstName', 'lastName', 'phoneNumber', 'email', 'image']
    list_editable = ['lastName', 'phoneNumber', 'email', 'image']


admin.site.register(Content)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Picture, PictureAdmin)
admin.site.register(Offer, OfferAdmin)
admin.site.register(AboutMe, AboutMeAdmin)
