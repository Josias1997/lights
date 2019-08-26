from django.contrib import admin
from .models import Article, Comment, NewsletterUser

# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image')
    list_filter = ('created_at', 'is_visible')
    list_editable = ('is_visible', 'image')


admin.site.register(Article, ArticleAdmin)


class NewsLetterAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'date_subscription')


admin.site.register(NewsletterUser, NewsLetterAdmin)
admin.site.register(Comment)
