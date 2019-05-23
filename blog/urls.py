from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

app_name = 'blog'
urlpatterns = [
    path('api/blog/articles/', views.ArticleListCreate.as_view(), name='index'),
    path('api/blog/categories', views.CategoryListCreate.as_view(), name='categories'),
    path('api/blog/pictures', views.PictureListCreate.as_view(), name='pictures'),
    path('api/blog/offers', views.OfferListCreate.as_view(), name='offers')
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
