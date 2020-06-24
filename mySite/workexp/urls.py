from rest_framework import routers
from .api import workexpViewSet

router = routers.DefaultRouter()
router.register('api/workexp', workexpViewSet, 'workexp')

urlpatterns = router.urls