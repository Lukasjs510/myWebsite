from workexp.models import workexp
from rest_framework import viewsets, permissions
from .serializers import workexpSerializer

# workexp Viewset
class workexpViewSet(viewsets.ModelViewSet):
    queryset = workexp.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = workexpSerializer