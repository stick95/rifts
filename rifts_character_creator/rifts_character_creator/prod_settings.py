from .settings import *

DEBUG = True

ALLOWED_HOSTS = [
    "*",
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'rifts',
        'USER': 'postgres',
        'PASSWORD': 'cGk030507!',
        'HOST': 'prod.choj69cwqkmx.us-east-1.rds.amazonaws.com',
        'PORT': '5432',
        'OPTIONS': {
            'options': '-c search_path=character_manager'
        },
    }
}
