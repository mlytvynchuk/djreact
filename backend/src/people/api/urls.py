from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, GroupViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'users', ProfileViewSet, basename='profiles')
router.register(r'groups', GroupViewSet, basename='profile_groups')

urlpatterns = router.urls
