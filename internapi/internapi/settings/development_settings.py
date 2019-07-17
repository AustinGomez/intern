from .base_settings import *

DEBUG = True

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# AllAuth
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = \
    ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = 'http://localhost:3000/confirmed'
