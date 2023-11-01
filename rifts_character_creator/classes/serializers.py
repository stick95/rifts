from rest_framework import serializers
from .models import Occ, Rcc


class OccSerializer(serializers.ModelSerializer):
    rccs = serializers.SlugRelatedField(
        many=True,
        slug_field='id',
        queryset=Rcc.objects.all()
    )

    class Meta:
        model = Occ
        fields = '__all__'


class RccSerializer(serializers.ModelSerializer):
    occs = serializers.SerializerMethodField()

    class Meta:
        model = Rcc
        fields = '__all__'

    def get_occs(self, obj):
        return OccSerializer(obj.occ.all(), many=True).data
