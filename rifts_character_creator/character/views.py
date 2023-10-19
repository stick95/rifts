from rest_framework import generics
from .models import Character
from .serializers import ItemSerializer


class CharacterListCreateView(generics.ListCreateAPIView):
    queryset = Character.objects.all()
    serializer_class = ItemSerializer
