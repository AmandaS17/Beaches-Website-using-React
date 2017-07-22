from rest_framework.serializers import ModelSerializer

from mainserver.models import UserProfile

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id','firstname', 'lastname', 'email', 'numppl']
