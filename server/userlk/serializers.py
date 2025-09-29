from rest_framework import serializers
from userlk.models import User

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'user_name', 'user_email', 'user_password']