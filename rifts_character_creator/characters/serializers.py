from rest_framework import serializers

from users.serializers import UserSerializer
from classes.serializers import OccSerializer, RccSerializer
from .models import Character

class CharacterSerializer(serializers.ModelSerializer):
    userDetails = UserSerializer(source='user', read_only=True)
    rccDetails = RccSerializer(source='rcc', read_only=True)
    occDetails = OccSerializer(source='occ', read_only=True)

    class Meta:
        model = Character
        fields = '__all__'