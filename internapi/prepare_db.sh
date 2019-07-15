docker exec internapi_web_1 python manage.py migrate
echo "Migrations done"
docker exec internapi_web_1 python manage.py loaddata ./fixtures/data.json
docker exec internapi_web_1 python manage.py loaddata ./fixtures/job_data.json
docker exec internapi_web_1 python manage.py loaddata ./fixtures/review_data.json
docker exec internapi_web_1 python manage.py update_index --remove

