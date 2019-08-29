from .models import Category, Picture, Offer, Reservation
from .serializers import CategorySerializer, PictureSerializer, \
    OfferSerializer
from rest_framework.generics import GenericAPIView, RetrieveAPIView, ListAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.decorators import api_view
from django.shortcuts import HttpResponse, get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.


class CategoryListView(ListModelMixin, GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class PictureListView(ListAPIView):
    queryset = Picture.objects.filter(is_visible=True).order_by('-created_at')
    serializer_class = PictureSerializer


class SinglePictureView(RetrieveAPIView):
    queryset = Picture.objects.filter(is_visible=True)
    serializer_class = PictureSerializer


class OfferListView(ListModelMixin, GenericAPIView):
    queryset = Offer.objects.filter(is_visible=True).order_by('-created_at')
    serializer_class = OfferSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class SingleOfferView(RetrieveAPIView):
    queryset = Offer.objects.filter(is_visible=True)
    serializer_class = OfferSerializer


@api_view(http_method_names=['POST'])
def make_reservation(request):
    id = request.data.get("id")
    offer = get_object_or_404(Offer, id=id)
    name = request.data.get("name")
    email = request.data.get("email")
    reservation = Reservation(offer=offer, reservation_author_name=name, reservation_author_email=email)
    reservation.save()
    send_mail(subject="Réservation", from_email=settings.EMAIL_HOST_USER, recipient_list=[email],
        message="Réservation éffectuée", fail_silently=False)
    send_mail(subject="Réservation", from_email=settings.EMAIL_HOST_USER, recipient_list=[settings.EMAIL_HOST_USER],
        message=f"Nouvelle réservation de {name} email: {email}", fail_silently=False)
    return HttpResponse("Réservation éffectuée")


@api_view(http_method_names=['POST'])
def contact_admin(request):
    name = request.data.get("name")
    email = request.data.get("email")
    subject = request.data.get("subject")
    message = request.data.get("message")
    reply_message = "Merci de me contacter je vous reviendrai avec les renseignements nécessaires"
    send_mail(subject=subject, from_email=email, recipient_list=[settings.EMAIL_HOST_USER],
              message=f"{name} {email} {message}"
              , fail_silently=False)
    send_mail(subject=subject, from_email=settings.EMAIL_HOST_USER, recipient_list=[email],
              message=reply_message, fail_silently=False)
    return HttpResponse("Votre message a été transmis avec succès. Veuillez consulter votre mail pour "
                        "plus d'informations")



