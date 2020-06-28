from welcome.models import welcome
from rest_framework import viewsets, permissions
from .serializers import welcomeSerializer

# welcome Viewset


class welcomeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = welcomeSerializer

    def get_queryset(self):
        return self.request.user.welcome.all(owner=self.request.user)

    def preform_create(self, serializer):
        serializer.save(owner=self.request.user)
