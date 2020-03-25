# pull official base image
FROM python:3.8.0-slim

# set work directory
WORKDIR /usr/local/site/backend/

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV PG_VERSION=11

# install psycopg2 dependencies
RUN set -ex \
    && apt-get update \
    && apt-get install  -y\
       gcc \
       g++ \
       postgresql-server-dev-$PG_VERSION \
       musl-dev \
    && apt-get install -y \
       gettext \
       postgresql-client-$PG_VERSION \
    && apt-get install  -y\
       binutils libproj-dev libgeos++ proj-bin libgdal20 python3-gdal

# install dependencies
RUN set -ex && \
    pip install --upgrade pip
COPY ./backend/requirements.txt /usr/local/site/backend/requirements.txt
RUN set -ex && \
    pip install -r requirements.txt

# copy project
COPY . /usr/local/site/

# Have to move all static files other than index.html to root/
# for whitenoise middleware
WORKDIR /usr/local/site/frontend/build

RUN mkdir root && mv *.ico *.js *.json root

# Collect static files
RUN mkdir /usr/local/site/backend/staticfiles

WORKDIR /usr/local/site/

# SECRET_KEY is only included here to avoid raising an error when generating static files.
# Be sure to add a real SECRET_KEY config variable in Heroku.
RUN DJANGO_SETTINGS_MODULE=carebackend.settings.production \
  SECRET_KEY=somethingsupersecret \
  python3 backend/manage.py collectstatic --noinput
