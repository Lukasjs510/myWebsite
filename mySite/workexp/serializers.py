from rest_framework import serializers
from workexp.models import workexp

#workexp serializer

class workexpSerializer(serializers.ModelSerializer):
    class Meta:
        model = workexp
        fields = '__all__'