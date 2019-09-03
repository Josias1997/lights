from django.db import models

class Description(models.Model):
    biographie = models.TextField()
    vision = models.TextField()

    def __str__(self):
        return self.biographie