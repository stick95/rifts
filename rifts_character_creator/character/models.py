from django.db import models

class Character(models.Model):

    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True)

