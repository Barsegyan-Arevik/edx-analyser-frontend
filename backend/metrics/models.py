from django.db import models


class VideoFetch(models.Model):
    username = models.CharField(max_length=200)
    time = models.FloatField(max_length=200)
