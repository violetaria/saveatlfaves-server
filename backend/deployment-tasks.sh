#!/usr/bin/env bash

python3 manage.py migrate --settings carebackend.settings.production

python3 manage.py collectstatic --noinput --settings carebackend.settings.production
