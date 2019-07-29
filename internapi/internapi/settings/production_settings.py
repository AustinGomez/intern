from .base_settings import *

DEBUG = False

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': '/cloudsql/internbeat:us-central1:internbeat-production',
        'USER': 'postgres',
        'PASSWORD': os.environ['DB_PASSWORD'],
        'NAME': 'postgres',
        'PORT': 5432
    }
}

ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = \
    ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = 'http://internbeat.com/confirmed'

# TODO: set this up.
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.mailgun.org'
EMAIL_PORT = 587
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = True
