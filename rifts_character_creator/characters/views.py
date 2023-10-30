from rest_framework import generics
from .models import Character
from .serializers import CharacterSerializer


class CharacterListCreateView(generics.ListCreateAPIView):
    queryset = Character.objects.all().select_related("user").order_by("name")
    serializer_class = CharacterSerializer


class CharacterDeleteView(generics.DestroyAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


