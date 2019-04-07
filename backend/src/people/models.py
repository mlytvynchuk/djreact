from django.db import models


class Profile(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    group = models.ForeignKey('Group', on_delete=models.CASCADE)

    def __str__(self):
        return self.email


class Group(models.Model):
    name = models.CharField(max_length=100)
    # actions of Group
    is_video = models.BooleanField(default=False)
    is_data_analytics = models.BooleanField(default=False)
    is_voice_analytics = models.BooleanField(default=False)
    is_services_analytics = models.BooleanField(default=False)

    def __str__(self):
        return self.name
