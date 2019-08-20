from django.contrib import admin
from .models import Content, Offer, Picture, AboutMe, Category


class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image')
    list_filter = ('created_at', 'is_visible')
    list_editable = ('is_visible', 'image')


admin.site.register(Offer, OfferAdmin)


class PictureAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image', 'category')
    list_filter = ('created_at', 'is_visible', 'category')
    list_editable = ('is_visible', 'image')


admin.site.register(Picture, PictureAdmin)


class AboutMeAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'phoneNumber', 'email', 'image')
    list_editable = ('phoneNumber', 'email', 'image')


admin.site.register(AboutMe, AboutMeAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Content)

