from django.db import models
from django.contrib.auth.models import User

class workexp(models.Model):
    title = models.CharField(max_length=250)
    company = models.CharField(max_length=250)
    start = models.CharField(max_length=25)
    end = models.CharField(max_length=25)
    description = models.CharField(max_length=1000)
    owner = models.ForeignKey(User, related_name="workexp", on_delete=models.CASCADE, null=True)