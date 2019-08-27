from django.contrib import admin
from .models import Content, Offer, Picture, AboutMe, Category, Reservation


class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image', 'url')
    list_filter = ('created_at', 'is_visible')
    list_editable = ('is_visible', 'image', 'url')


admin.site.register(Offer, OfferAdmin)


class PictureAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image', 'url', 'category')
    list_filter = ('created_at', 'is_visible', 'category')
    list_editable = ('is_visible', 'image', 'url')


admin.site.register(Picture, PictureAdmin)


class AboutMeAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'phoneNumber', 'email', 'image')
    list_editable = ('phoneNumber', 'email', 'image')


admin.site.register(AboutMe, AboutMeAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Reservation)
admin.site.register(Content)

