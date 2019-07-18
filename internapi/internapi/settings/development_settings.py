from .base_settings import *

DEBUG = True

ALLOWED_HOSTS = ['192.168.0.36', 'localhost']

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
