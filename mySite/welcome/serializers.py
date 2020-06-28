from rest_framework import serializers
from welcome.models import welcome

# welcome serializer


class welcomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = welcome
        fields = '__all__'
