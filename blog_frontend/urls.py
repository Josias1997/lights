from django.urls import path
from . import views
from django.conf.urls import url


urlpatterns = [
    path('', views.index, name="home"),
    path('galerie/', views.index, name='gallery'),
    path('offres/', views.index, name='offers'),
    path('contact/', views.index, name='contact')
]
