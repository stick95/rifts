from django.db import models

from classes.models import Occ, Rcc


class Character(models.Model):

    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True)
    occ = models.ForeignKey(Occ, related_name='characters', on_delete=models.CASCADE)
    rcc = models.ForeignKey(Rcc, related_name='characters', on_delete=models.CASCADE)

