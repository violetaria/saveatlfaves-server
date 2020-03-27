import os
from carebackend.settings import *
import dj_database_url

# only update a few items if we are going to heroku
TO_UPDATE = ("HOST", "PORT", "USER", "PASSWORD", "NAME")
HEROKU_DJ_DB_CONFIG = dj_database_url.config(conn_max_age=600, ssl_require=True)
if HEROKU_DJ_DB_CONFIG:
    DATABASES['default'].update((k, HEROKU_DJ_DB_CONFIG[k]) for k,v in DATABASES['default'].items() if k in TO_UPDATE)

GOOGLE_PLACES_API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY")

STATIC_ROOT = os.path.join(os.path.dirname(__file__), './staticfiles/')
STATIC_URL = '/static/'

# Ensure STATIC_ROOT exists.
os.makedirs(STATIC_ROOT, exist_ok=True)

# Insert Whitenoise Middleware.
MIDDLEWARE = tuple(['whitenoise.middleware.WhiteNoiseMiddleware'] + list(MIDDLEWARE))
