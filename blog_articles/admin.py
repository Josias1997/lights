from django.contrib import admin
from .models import Article, Comment

# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'is_visible', 'image')
    list_filter = ('created_at', 'is_visible')
    list_editable = ('is_visible', 'image')


admin.site.register(Article, ArticleAdmin)
admin.site.register(Comment)
