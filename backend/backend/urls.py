from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('metrics/', include('metrics.api.endpoints')),
    #     добавляем при создании нового модуля
]
