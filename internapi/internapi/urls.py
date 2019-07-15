from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from companies.views import CompanyViewSet, CompanySearchView, CompanyAutocompleteSearchViewSet
from jobs.views import JobViewSet
from reviews.views import ReviewViewSet

router = routers.DefaultRouter()

router.register(r'companies', CompanyViewSet)
router.register(r'search', CompanySearchView, basename="search")
router.register(r'autocomplete', CompanyAutocompleteSearchViewSet, basename="auto")

router.register(r'jobs', JobViewSet)
router.register(r'reviews', ReviewViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
