from django.db import models
from django.contrib.auth.models import User


class welcome(models.Model):
    title = models.CharField(max_length=250)
    text = models.CharField(max_length=2000)
    #img = models.ImageField(width_field=250, height_field=200)
    time = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="welcome", on_delete=models.CASCADE, null=True)
