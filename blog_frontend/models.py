from django.db import models

class Description(models.Model):
    biographie = models.TextField()
    vision = models.TextField()
    image = models.ImageField(upload_to='home/picture/', blank=True, null=True)

    def __str__(self):
        return self.biographie