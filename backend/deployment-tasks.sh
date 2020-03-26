#! /bin/bash

python3 manage.py migrate --settings carebackend.settings_production

# python3 manage.py collectstatic --noinput --settings carebackend.settings_production
