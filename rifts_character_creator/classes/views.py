from rest_framework import generics
from django.shortcuts import render

from classes.models import Occ, Rcc
from classes.serializers import OccSerializer, RccSerializer


class OccListCreateView(generics.ListCreateAPIView):
    queryset = Occ.objects.all()
    serializer_class = OccSerializer

class RccListCreateView(generics.ListCreateAPIView):
    queryset = Rcc.objects.all()
    serializer_class = RccSerializer