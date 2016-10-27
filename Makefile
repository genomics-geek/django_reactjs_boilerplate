docker-build:
	docker-compose -f docker-compose.yml build

docker-build-dev:
	docker-compose -f docker-compose-development.yml build

docker-up-background:
	docker-compose -f docker-compose.yml up -d

docker-up-background-dev:
	docker-compose -f docker-compose-development.yml up -d

docker-up:
	docker-compose -f docker-compose.yml up

docker-up-dev:
	docker-compose -f docker-compose-development.yml up

ssh-django:
	docker exec -ti django_server bash

ssh-node:
	docker exec -ti node_server bash

ssh-psql:
	docker exec -ti psql_server bash

ssh-nginx:
	docker exec -ti nginx_server bash

django-dev:
	python manage.py runserver --settings=django_config.settings.local

# docker-clean-up:
# 	docker rm -f $(docker ps -a -q) -v
# 	docker rmi -f $(docker images -a -q)
# 	docker volume rm $(docker volume ls -q)
