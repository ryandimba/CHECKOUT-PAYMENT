"""
Django settings for barbershop project.

Generated by 'django-admin startproject' using Django 5.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
from dotenv import load_dotenv
load_dotenv()
import dj_database_url
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-6#@osdls*f)@$z=u62#n6qsyw0)%_@%@sb^iuv33o!oa5ntrm7'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]
WSGI_APPLICATION = 'barbershop.wsgi.application'
# Add your M-Pesa Daraja API credentials
MPESA_CONSUMER_KEY = 'XnIihbzI7K6tMUgy8QJOQbHB6HuAq2W9Pol81GFZA4YUEsB5'
MPESA_CONSUMER_SECRET = 'It57pUm8wfdjsrY5fCnhKOcGwh507S6PYatyV4IyABSAhP2d1KHtjFu4Gm2KoAq0'
MPESA_BUSINESS_SHORTCODE='174379'
MPESA_PASSWORD='MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMjIyMTcxNDMw'
MPESA_INITIATE_PAYMENT_URL='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
TRANSACTION_TYPE='CustomerPayBillOnline'
TRANSACTION_DESCRIPTION='Payment of X'
API_RESOURCE_URL='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
LIPANAMPESA_PASSKEY='bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
ACCESS_TOKEN_URL='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
ACCOUNT_REFERENCE='CompanyXLTD'


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
     "users",  # aded
    "rest_framework",  # adedd
    "rest_framework.authtoken",  # adedd
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True
"""
Django settings for barbershop project.

Generated by 'django-admin startproject' using Django 5.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
from dotenv import load_dotenv
load_dotenv()
import dj_database_url
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-6#@osdls*f)@$z=u62#n6qsyw0)%_@%@sb^iuv33o!oa5ntrm7'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]
WSGI_APPLICATION = 'barbershop.wsgi.application'
# Add your M-Pesa Daraja API credentials
MPESA_CONSUMER_KEY = 'XnIihbzI7K6tMUgy8QJOQbHB6HuAq2W9Pol81GFZA4YUEsB5'
MPESA_CONSUMER_SECRET = 'It57pUm8wfdjsrY5fCnhKOcGwh507S6PYatyV4IyABSAhP2d1KHtjFu4Gm2KoAq0'
MPESA_BUSINESS_SHORTCODE='174379'
MPESA_PASSWORD='MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMjIyMTcxNDMw'
MPESA_INITIATE_PAYMENT_URL='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
TRANSACTION_TYPE='CustomerPayBillOnline'
TRANSACTION_DESCRIPTION='Payment of X'
API_RESOURCE_URL='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
LIPANAMPESA_PASSKEY='bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
ACCESS_TOKEN_URL='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
ACCOUNT_REFERENCE='CompanyXLTD'


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
     "users",  # aded
    "rest_framework",  # adedd
    "rest_framework.authtoken",  # adedd
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOWED_ORIGINS = [
    "*",
]
  

ROOT_URLCONF = 'barbershop.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]




# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASE_URL = 'mysql://root:1Gd4HDa61Fb543AA--2131EBbcdCfEGg@viaduct.proxy.rlwy.net:56143/railway'

# Parse database configuration from $DATABASE_URL
db_config = dj_database_url.parse(DATABASE_URL)

# Update Django database settings
DATABASES = {
    'default': db_config
}


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# added
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.TokenAuthentication",
    ]
}
# added
AUTH_USER_MODEL = "users.Users"

# adedd
ACCOUNT_UNIQUE_EMAIL = True


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# settings.py

# Define the directory where media files will be uploaded.
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Define the base URL to serve media files from.
MEDIA_URL = '/media/'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Add the directories where Django will search for static files.
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ALLOWED_ORIGINS = [
    "*",
]
  

ROOT_URLCONF = 'barbershop.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]




# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASE_URL = 'mysql://root:1Gd4HDa61Fb543AA--2131EBbcdCfEGg@viaduct.proxy.rlwy.net:56143/railway'

# Parse database configuration from $DATABASE_URL
db_config = dj_database_url.parse(DATABASE_URL)

# Update Django database settings
DATABASES = {
    'default': db_config
}


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# added
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.TokenAuthentication",
    ]
}
# added
AUTH_USER_MODEL = "users.Users"

# adedd
ACCOUNT_UNIQUE_EMAIL = True


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
