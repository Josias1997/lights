from django.contrib import admin
from .models import Article, Comment, NewsletterUser, BlogTheme

# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image', 'url')
    list_filter = ('created_at', 'is_visible')
    list_editable = ('is_visible', 'image', 'url')


admin.site.register(Article, ArticleAdmin)


class NewsLetterAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'date_subscription')


admin.site.register(NewsletterUser, NewsLetterAdmin)

class BlogThemeAdmin(admin.ModelAdmin):
    list_display = ('title', 'slogan', 'wallpaper')
    list_editable = ('slogan', 'wallpaper')

admin.site.register(BlogTheme, BlogThemeAdmin)
admin.site.register(Comment)
