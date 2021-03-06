from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

app_name = 'blog'
urlpatterns = [
    path('api/blog/home/', views.HomeDataView.as_view(), name='api_home'),
    path('api/blog/categories/', views.CategoryListView.as_view(), name='categories'),
    path('api/blog/pictures/', views.PictureListView.as_view(), name='pictures'),
    path('api/blog/pictures/<int:pk>', views.SinglePictureView.as_view(), name='article'),
    path('api/blog/offers/', views.OfferListView.as_view(), name='offers'),
    path('api/blog/offers/<int:pk>', views.SingleOfferView.as_view(), name='article'),
    path('api/blog/offers/create-reservation', views.make_reservation, name="make-reservation"),
    path('api/blog/contact', views.contact_admin, name='contact'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
