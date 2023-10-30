from django.db import models
from django.contrib.auth.models import User
from classes.models import Occ, Rcc


class Character(models.Model):

    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True)
    user = models.ForeignKey(User, related_name='characters', on_delete=models.CASCADE, null=True)
    occ = models.ForeignKey(Occ, related_name='characters', on_delete=models.CASCADE, null=True)
    rcc = models.ForeignKey(Rcc, related_name='characters', on_delete=models.CASCADE, null=True)
    current_stats = models.JSONField(null=True)
    max_stats = models.JSONField(null=True)
    level = models.IntegerField(null=True)

    def __str__(self):
        return self.name


