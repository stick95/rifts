from django.db import models
from django.contrib.auth.models import User
from classes.models import Occ, Rcc


class Character(models.Model):

    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True)
    user = models.ForeignKey(User, related_name='characters', on_delete=models.CASCADE, null=True)
    occ = models.ForeignKey(Occ, related_name='characters', on_delete=models.CASCADE, null=True)
    rcc = models.ForeignKey(Rcc, related_name='characters', on_delete=models.CASCADE, null=True)
    iq = models.JSONField(null=True)
    me = models.JSONField(null=True)
    ma = models.JSONField(null=True)
    ps = models.JSONField(null=True)
    pp = models.JSONField(null=True)
    pe = models.JSONField(null=True)
    pb = models.JSONField(null=True)
    spd = models.JSONField(null=True)
    hp = models.JSONField(null=True)
    sdc = models.JSONField(null=True)
    mdc = models.JSONField(null=True)
    level = models.IntegerField(null=True)


    def __str__(self):
        return self.name


