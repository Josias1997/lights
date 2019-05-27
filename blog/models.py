from django.db import models
from django.utils import timezone
from django.db.models.signals import pre_save, pre_delete
from django.dispatch import receiver
import os
# Create your models here.


class Content(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    is_visible = models.BooleanField(default=False)
    url = models.CharField(max_length=100, null=True, default="none")


class Article(Content):
    image = models.ImageField(upload_to="articles/pictures/", null=True)

    def __str__(self):
        return self.title


class Picture(Content):
    image = models.ImageField(upload_to="pictures/pictures/", null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)


class Offer(Content):
    image = models.ImageField(upload_to="offers/pictures/", null=True)
    price = models.FloatField(default=0)


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


@receiver(pre_save)
def save_handler(sender, instance, **kwargs):
    if isinstance(instance, Article):
        instance.url = ""
        url_list = instance.image.url.split('/')
        url_list.insert(1, '/articles/pictures/')
        instance.url = "".join(url_list)
    elif isinstance(instance, Picture):
        instance.url = ""
        url_list = instance.image.url.split('/')
        url_list.insert(1, '/pictures/pictures/')
        instance.url = "".join(url_list)
    elif isinstance(instance, Offer):
        instance.url = ""
        url_list = instance.image.url.split('/')
        url_list.insert(1, '/offers/pictures/')
        instance.url = "".join(url_list)


@receiver(pre_delete, sender=Article)
def delete_handler(sender, instance, **kwargs):
    if os.path.exists(instance.image.url):
        os.remove(instance.image.url)


# @receiver(pre_save, sender=Picture)
# def save_handler(sender, instance, **kwargs):
#     instance.url = ""
#     url_list = instance.image.url.split('/')
#     url_list.insert(1, '/pictures/pictures/')
#     instance.url = "".join(url_list)


@receiver(pre_delete, sender=Picture)
def delete_handler(sender, instance, **kwargs):
    if os.path.exists(instance.image.url):
        os.remove(instance.image.url)

#
# @receiver(pre_save, sender=Offer)
# def save_handler(sender, instance, **kwargs):
#     instance.url = ""
#     url_list = instance.image.url.split('/')
#     url_list.insert(1, '/offers/pictures/')
#     instance.url = "".join(url_list)


@receiver(pre_delete, sender=Offer)
def delete_handler(sender, instance, **kwargs):
    if os.path.exists(instance.image.url):
        os.remove(instance.image.url)
