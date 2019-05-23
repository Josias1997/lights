from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('gallery', views.index),
    path('offers', views.index),
    path('blog', views.index),
    path('about-us', views.index),
]
