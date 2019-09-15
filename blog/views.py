from .models import Category, Picture, Offer, Reservation, HomeData, EmailMessage
from .serializers import CategorySerializer, PictureSerializer, \
    OfferSerializer, HomeDataSerializer
from rest_framework.generics import GenericAPIView, RetrieveAPIView, ListAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.decorators import api_view
from django.shortcuts import HttpResponse, get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from helpers.helpers import send_mail_html
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


class HomeDataView(ListModelMixin, GenericAPIView):
    queryset = HomeData.objects.all()
    serializer_class = HomeDataSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


@api_view(http_method_names=['POST'])
def make_reservation(request):
    id = request.data.get("id")
    offer = get_object_or_404(Offer, id=id)
    name = request.data.get("name")
    number = request.data.get("number")
    email = request.data.get("email")
    reservation = Reservation(offer=offer, reservation_author_name=name, reservation_author_email=email)
    reservation.save()
    messages = EmailMessage.objects.all()[0]
    bookingMessage = messages.reservationMessage
    context = {
        'content': bookingMessage,
        'name': name
    }
    send_mail_html([email], "Réservation", 'blog/reservation.html', context, settings.EMAIL_HOST_USER)
    send_mail(subject="Réservation", from_email=settings.EMAIL_HOST_USER, recipient_list=[settings.EMAIL_HOST_USER],
        message="Nouvelle réservation de {} email: {} pour l'offre {}: {} {}".format(name, email, offer.title, offer.price, number)
        , fail_silently=False)
    return HttpResponse("Réservation éffectuée")


@api_view(http_method_names=['POST'])
def contact_admin(request):
    name = request.data.get("name")
    email = request.data.get("email")
    subject = request.data.get("subject")
    message = request.data.get("message")
    messages = EmailMessage.objects.all()[0]
    contactMessage = messages.contactMessage
    context = {
        'content': contactMessage,
        'name': name
    }
    send_mail_html([email], "Confirmation contact", 'blog/contact.html', context, settings.EMAIL_HOST_USER)
    send_mail(subject=subject, from_email=settings.EMAIL_HOST_USER, recipient_list=[settings.EMAIL_HOST_USER],
              message="{} {} {}".format(name, email, message)
              , fail_silently=False)
    return HttpResponse("Votre message a été transmis avec succès. Veuillez consulter votre mail pour "
                        "plus d'informations")



