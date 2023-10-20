from rest_framework import serializers
from .models import Occ, Rcc


class OccSerializer(serializers.ModelSerializer):
    rccs = serializers.SlugRelatedField(
        many=True,
        slug_field='name',
        queryset=Rcc.objects.all()
    )

    class Meta:
        model = Occ
        fields = '__all__'


class RccSerializer(serializers.ModelSerializer):
    occ = OccSerializer(many=True, read_only=True)

    class Meta:
        model = Rcc
        fields = '__all__'
