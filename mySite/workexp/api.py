from workexp.models import workexp
from rest_framework import viewsets, permissions
from .serializers import workexpSerializer

# workexp Viewset


class workexpViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = workexpSerializer

    def get_queryset(self):
        return self.request.user.workexp.all()

    def preform_create(self, serializer):
        serializer.save(owner=self.request.user)
