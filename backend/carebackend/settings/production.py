import os
from carebackend.settings.base import *
import dj_database_url

# only update a few items if we are going to heroku
TO_UPDATE = ("HOST", "PORT", "USER", "PASSWORD", "NAME")
HEROKU_DJ_DB_CONFIG = dj_database_url.config(conn_max_age=600, ssl_require=True)
if HEROKU_DJ_DB_CONFIG:
    DATABASES['default'].update((k, HEROKU_DJ_DB_CONFIG[k]) for k,v in DATABASES['default'].items() if k in TO_UPDATE)

# TEMPLATES[0]["DIRS"] = [os.path.join(BASE_DIR, "../", "frontend")]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

# STATICFILES_DIRS = (
#     os.path.join(BASE_DIR, "../", "frontend", "build", "static"),  # update the STATICFILES_DIRS
# )
