from django.db import models
from django.utils import timezone
from django.db.models.signals import pre_save
from django.dispatch import receiver
from helpers.helpers import set_path, compress_images
# Create your models here.


class Content(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    is_visible = models.BooleanField(default=False)
    url = models.CharField(max_length=100, null=True, default="none")


class Picture(Content):
    image = models.ImageField(upload_to="pictures/pictures/", null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)


class Offer(Content):
    image = models.ImageField(upload_to="offers/pictures/", null=True)
    price = models.FloatField(default=0)

    def __str__(self):
        return "{} {}".format(self.title, self.price)


class Reservation(models.Model):
    offer = models.ForeignKey('Offer', on_delete=models.CASCADE, related_name='reservations')
    reservation_author_name = models.CharField(max_length=100)
    reservation_author_email = models.EmailField()
    reservation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} a fait une réservation pour l'offre {} (Prix) {}".format(self.reservation_author_name, self.offer.title, self.offer.price)


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class HomeData(models.Model):
    about_me = models.TextField()
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.about_me



@receiver(pre_save)
def save_handler(sender, instance, **kwargs):
    compress_images(instance)
    if isinstance(instance, Picture):
        set_path(instance, "pictures")
    elif isinstance(instance, Offer):
        set_path(instance, "offers")


