from django.urls import path

from metrics.api import viewsets

urlpatterns = [
    path('video_fetch', viewsets.VideoFetchViewSet.as_view({'get': 'get_video_fetch'})),
    # path('user_roll', viewsets.UserRollViewSet.as_wiev({'get': 'get_user_roll'}))
    #     добавляем при новом методе или viewset-е
]
