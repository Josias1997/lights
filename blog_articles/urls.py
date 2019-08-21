from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('blog/', views.get_articles, name="all_articles"),
    path('blog/<slug>', views.get_details, name="details")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)