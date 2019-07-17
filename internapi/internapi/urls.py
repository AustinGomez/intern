from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from companies.views import CompanyViewSet, CompanySearchView, CompanyAutocompleteSearchViewSet
from jobs.views import JobViewSet
from reviews.views import ReviewViewSet
from users.views import null_view, complete_view

from allauth.account.views import ConfirmEmailView

router = routers.DefaultRouter()

router.register(r'companies', CompanyViewSet)
router.register(r'search', CompanySearchView, basename="search")
router.register(r'autocomplete', CompanyAutocompleteSearchViewSet, basename="auto")

router.register(r'jobs', JobViewSet)
router.register(r'reviews', ReviewViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),

    # Rest Auth URLs
    url(r'^api/rest-auth/registration/account-email-verification-sent/',
        null_view,
        name='account_email_verification_sent'),
    url(r'^api/rest-auth/registration/account-confirm-email/(?P<key>[-:\w]+)/$',
        ConfirmEmailView.as_view(),
        name='account_confirm_email'),
    url(r'^api/rest-auth/registration/complete/$',
        complete_view,
        name='account_confirm_complete'),
    url(
        r'^api/rest-auth/password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        null_view, name='password_reset_confirm'),
    url(r'^api/rest-auth/', include('rest_auth.urls')),
    url(r'^api/rest-auth/registration/', include('rest_auth.registration.urls')),
]
