from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from metrics.api.serializers import VideoFetchSerializer
from metrics.models import VideoFetch


class VideoFetchViewSet(viewsets.GenericViewSet):
    @action(methods=['GET'], detail=False)
    def get_video_fetch(self, request):
        #
        result = [
            VideoFetch(
                username="abacaba",
                time=424237.854098
            ),
            VideoFetch(
                username="abacaba",
                time=424237.854098
            )
        ]
        serializer = VideoFetchSerializer(result, many=True)
        return Response(data=serializer.data)


class UserRollViewSet(viewsets.GenericViewSet):
    @action(methods=['GET'], detail=False)
    def get_user_roll(self, request):
        result = [
            VideoFetch(
                username="abacaba",
                time=424237.854098
            )
        ]
        serializer = VideoFetchSerializer(result, many=True)
        return Response(data=serializer.data)

# todo: разобраться что такое viewset и view
