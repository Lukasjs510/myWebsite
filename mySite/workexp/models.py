from django.db import models

class workexp(models.Model):
    title = models.CharField(max_length=250)
    company = models.CharField(max_length=250)
    start = models.CharField(max_length=25)
    end = models.CharField(max_length=25)
    description = models.CharField(max_length=1000)