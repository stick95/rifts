from rest_framework import serializers
from .models import Character

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'