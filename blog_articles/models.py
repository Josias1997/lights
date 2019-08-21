from django.db import models
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField
from django.shortcuts import reverse
from django.dispatch import receiver
from django.db.models.signals import pre_save
from helpers.helpers import set_path, compress_images

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    slug = models.SlugField(max_length=255, default="test-slug")
    content = RichTextUploadingField()
    created_at = models.DateTimeField(default=timezone.now)
    is_visible = models.BooleanField(default=False)
    url = models.CharField(max_length=100, null=True, default="none")
    image = models.ImageField(upload_to="articles/pictures/", null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('article_details', kwargs={
            'slug': self.slug
        })

    def set_slug(self, slug):
        self.slug = slug


@receiver(pre_save, sender=Article)
def must_automatically_fill_slug_field(sender, instance, **kwargs):
    slug = instance.title.replace(" ", "-")
    instance.set_slug(slug)
    compress_images(instance)
    set_path(instance, "articles")
