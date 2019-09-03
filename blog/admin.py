from django.contrib import admin
from .models import Content, Offer, Picture, Category, Reservation, HomeData


class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image', 'url')
    list_filter = ('created_at', 'is_visible')
    list_editable = ('is_visible', 'image', 'url')


admin.site.register(Offer, OfferAdmin)


class PictureAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image', 'url', 'category')
    list_filter = ('created_at', 'is_visible', 'category')
    list_editable = ('is_visible', 'image', 'url', 'category')


admin.site.register(Picture, PictureAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)


admin.site.register(Category, CategoryAdmin)


admin.site.register(HomeData)
admin.site.register(Reservation)
admin.site.register(Content)

