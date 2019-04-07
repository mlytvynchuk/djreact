from people.models import Profile, Group
from .serializers import ProfileSerializer, GroupSerializer

from rest_framework import viewsets


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
