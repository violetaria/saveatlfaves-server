import json
import django
import sys
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'carebackend.settings.base'
sys.path.append(os.path.dirname(__file__) + '/..')
django.setup()
from places.models import Neighborhood, NeighborhoodEntry, Place, Area
from django.contrib.gis.geos import Polygon
import pandas as pd
from places.google_places_helper import fetch_details_for_place_id

fl = sys.argv[1]
area_to_use = sys.argv[2]

insert_if_not_found = sys.argv[3] == 'yes' if len(sys.argv) > 3 else False
area = Area.objects.get(key=area_to_use)

df = pd.read_csv(fl)

for _, row in df.iterrows():
    print("Processing", row['Neighborhood'])
    db_key = row.get('DB Key', "_".join(row['Neighborhood'].split()).lower())
    # overwrite area if it's there
    if row.get("Area") and not pd.isna(row['Area']):
        area = Area.objects.get(key=row.get("Area"))
        
    try:
        n = Neighborhood.objects.get(key=db_key)
    except Neighborhood.DoesNotExist:
        if insert_if_not_found:
            n = Neighborhood(name=row['Neighborhood'])
            n.key = db_key
        else:
            print("No DB Key match and not inserting, continuing...")
            continue
    if row.get('GeoJSON') and not pd.isna(row['GeoJSON']):
        if row['GeoJSON'].startswith('[[['):
            row['GeoJSON'] = row['GeoJSON'][1:-1]
        if not row['GeoJSON'].startswith('[['):
            row['GeoJSON'] = '[%s]' % row['GeoJSON']
        geo_json = json.loads(row['GeoJSON'])
        n.bounds = Polygon(geo_json)
        poly = ShapelyPolygon(geo_json)
        centroid = poly.centroid
        lat = centroid.y
        lng = centroid.x
    elif row.get('Location') and not pd.isna(row['Location']):
        lat,lng = [x.strip() for x in row['Location'].split(',')]
    elif row.get('Geometry') and not pd.isna(row['Geometry']):
        geometry_json = json.loads(row['Geometry'])
        xmin = geometry_json['geometry']['viewport']['southwest']['lng']
        ymin = geometry_json['geometry']['viewport']['southwest']['lat']
        xmax = geometry_json['geometry']['viewport']['northeast']['lng']
        ymax = geometry_json['geometry']['viewport']['northeast']['lat']
        bbox = (xmin, ymin, xmax, ymax)
        n.bounds = Polygon.from_bbox(bbox)
        lat = geometry_json['geometry']['location']['lat']
        lng = geometry_json['geometry']['location']['lng']
    elif row.get('Place Id') and not pd.isna(row['Place Id']):
        place_id = row['Place Id']
        r, photo_url, photo_attrib = fetch_details_for_place_id(place_id)
        geometry_json = r['geometry']
        xmin = geometry_json['viewport']['southwest']['lng']
        ymin = geometry_json['viewport']['southwest']['lat']
        xmax = geometry_json['viewport']['northeast']['lng']
        ymax = geometry_json['viewport']['northeast']['lat']
        bbox = (xmin, ymin, xmax, ymax)
        n.bounds = Polygon.from_bbox(bbox)
        lat = geometry_json['location']['lat']
        lng = geometry_json['location']['lng']
    else:
        print("missing necessary data!")
        continue
    n.lat = lat
    n.lng = lng
    n.area = area
    n.rank = row.get('Rank') if not pd.isna(row.get('Rank')) else None
    n.save()
