from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('blog/', views.HomeView.as_view(), name="all_articles"),
    path('blog/<slug>', views.ArticleDetailView.as_view(), name="article_details")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)