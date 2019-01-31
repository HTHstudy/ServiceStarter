from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_swagger.views import get_swagger_view
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from .views import *
  
router = routers.DefaultRouter()
router.register(r'api/home/user', UserViewSet)
router.register(r'api/home/group', GroupViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token-auth/', obtain_jwt_token),
    path('api/token-refresh/', refresh_jwt_token),
    path('api/token-verify/', verify_jwt_token),
    path('api/', include('api.urls')),
    path('', index),
    path('favicon.ico', favicon),
    path('manifest.json', manifest),
]
urlpatterns += router.urls

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += [path('swagger/', get_swagger_view(title='Pastebin API'))]