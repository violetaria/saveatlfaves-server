import os
from carebackend.settings.base import *
import dj_database_url

# only update a few items if we are going to heroku
TO_UPDATE = ("HOST", "PORT", "USER", "PASSWORD", "NAME")
HEROKU_DJ_DB_CONFIG = dj_database_url.config(conn_max_age=600, ssl_require=True)
if HEROKU_DJ_DB_CONFIG:
    DATABASES['default'].update((k, HEROKU_DJ_DB_CONFIG[k]) for k,v in DATABASES['default'].items() if k in TO_UPDATE)


INSTALLED_APPS.extend(["whitenoise.runserver_nostatic"])

# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
# Must insert after SecurityMiddleware, which is first in settings/common.py
MIDDLEWARE.insert(1, "whitenoise.middleware.WhiteNoiseMiddleware")

TEMPLATES[0]["DIRS"] = [os.path.join(BASE_DIR, "../", "frontend")]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATICFILES_DIRS = [os.path.join(BASE_DIR, "../", "frontend", "build", "static")]
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

STATIC_URL = "/static/"
WHITENOISE_ROOT = os.path.join(BASE_DIR, "../", "frontend", "build", "root")
