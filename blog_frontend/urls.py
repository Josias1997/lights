from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="home"),
    path('gallery', views.index, name="gallery"),
    path('offers', views.index, name="offers"),
    path('contact', views.index, name="contact"),
]
