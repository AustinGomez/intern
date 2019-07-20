from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from companies.views import CompanyViewSet
from jobs.views import JobViewSet
from reviews.views import ReviewViewSet

router = routers.DefaultRouter()

router.register(r'companies', CompanyViewSet)

router.register(r'jobs', JobViewSet)
router.register(r'reviews', ReviewViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
