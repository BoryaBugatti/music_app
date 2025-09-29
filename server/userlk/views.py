from django.shortcuts import render
from rest_framework import generics
from userlk.models import User
from userlk.serializers import userSerializer
# Create your views here.
class GetAllUsers(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = userSerializer