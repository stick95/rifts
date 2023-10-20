from django.db import models

class Occ(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)

    def __str__(self):
        return self.name

class Rcc(models.Model):
    name = models.CharField(max_length=100, null=False)
    occ = models.ManyToManyField(Occ, related_name='rccs')

    def __str__(self):
        return self.name
