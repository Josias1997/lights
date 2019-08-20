from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    content = RichTextField()
    created_at = models.DateTimeField(default=timezone.now)
    is_visible = models.BooleanField(default=False)
    url = models.CharField(max_length=100, null=True, default="none")
    image = models.ImageField(upload_to="articles/pictures/", null=True)

    def __str__(self):
        return self.title

