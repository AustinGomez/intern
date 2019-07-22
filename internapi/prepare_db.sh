docker exec internapi_web_1 python manage.py migrate --settings=internapi.settings.development_settings
echo "Migrations done"
docker exec internapi_web_1 python manage.py loaddata ./fixtures/data.json --settings=internapi.settings.development_settings
docker exec internapi_web_1 python manage.py loaddata ./fixtures/job_data.json --settings=internapi.settings.development_settings
docker exec internapi_web_1 python manage.py loaddata ./fixtures/review_data.json --settings=internapi.settings.development_settings

