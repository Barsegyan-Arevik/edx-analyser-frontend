from rest_framework import serializers

from metrics.models import VideoFetch


# network
class VideoFetchSerializer(serializers.ModelSerializer):

    class Meta:
        model = VideoFetch
        fields = ['username', 'time']