from rest_framework import generics
from django.shortcuts import render

from classes.models import Occ, Rcc
from classes.serializers import OccSerializer, RccSerializer


class OccListCreateView(generics.ListCreateAPIView):
    queryset = Occ.objects.all()
    serializer_class = OccSerializer

class OccDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Occ.objects.all()
    serializer_class = RccSerializer

class RccListCreateView(generics.ListCreateAPIView):
    queryset = Rcc.objects.all()
    serializer_class = RccSerializer

class RccDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rcc.objects.all()
    serializer_class = RccSerializer

