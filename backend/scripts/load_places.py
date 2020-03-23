import django
import sys
import os
sys.path.append(os.path.dirname(__file__) + '/..')
os.environ['DJANGO_SETTINGS_MODULE'] = 'carebackend.settings'
django.setup()
from places.models import Place
import pandas as pd
import sys
from places.google_places_helper import fetch_details_for_place_id

fl = sys.argv[1]

df = pd.read_csv(fl)

for _, row in df.iterrows():
    place_id = row['place_id']
    try:
        p = Place.objects.get(place_id=place_id)
    except Place.DoesNotExist:
        p = Place(place_id=place_id)

        r, photo_url, photo_attrib = fetch_details_for_place_id(place_id)
        if not r.get('rating'):  # probably not meaningful place
            continue
        p.name = r['name']
        p.address = r['formatted_address']
        p.image_url = photo_url
        p.user_rating = r['rating']
        p.num_ratings = r['user_ratings_total']
        p.place_types = ','.join(r.get('types', []))
        p.place_url = r.get('website')
        lat, lng = r['geometry']['location']['lat'], r['geometry']['location']['lng']
        p.lat = lat or row['lat']
        p.lng = lng or row['lng']
        p.image_attribution = photo_attrib
        p.gift_card_url = row.get('gift_card_url','')
        p.email_contact = row.get('email','')

        p.save()
