from rest_framework import serializers

from users.serializers import UserSerializer
from .models import Character

class CharacterSerializer(serializers.ModelSerializer):
    userDetails = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Character
        fields = '__all__'