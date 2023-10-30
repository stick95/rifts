from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer

class UserListView(generics.ListAPIView):
    queryset = User.objects.all().order_by("last_name", "first_name")
    serializer_class = UserSerializer
