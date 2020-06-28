from rest_framework import routers
from .api import welcomeViewSet

router = routers.DefaultRouter()
router.register('api/welcome', welcomeViewSet, 'welcome')

urlpatterns = router.urls
