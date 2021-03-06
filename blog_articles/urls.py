from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

app_name = 'blog_articles'

urlpatterns = [
    path('blog/api/articles', views.ArticleListView.as_view(), name="articles_api_url"),
    path('blog/', views.HomeView.as_view(), name="all_articles"),
    path('blog/<slug>', views.get_article_details, name="article_details"),
    path('blog/add_comment/<slug>/', views.add_comment, name="add-comment"),
    path('blog/newsletter/subscribe', views.newsletter_signup, name="signup")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
