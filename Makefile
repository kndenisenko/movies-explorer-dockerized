# Подготовка ENV-файла для дебиан и убунту
prepare-debian:
	cp example.env .env
	JWTKEY=$$(openssl rand -hex 32) && sed -i "s/JWTKEY/$$JWTKEY/g" .env
	PASSWORD=$$(openssl rand -hex 10) && sed -i "s/mongopwd/$$PASSWORD/g" .env

# Подготовка ENV-файла
prepare-macos:
	cp example.env .env
	JWTKEY=$$(openssl rand -hex 32) && sed -i '' "s/JWTKEY/$$JWTKEY/g" .env
	PASSWORD=$$(openssl rand -hex 10) && sed -i '' "s/mongopwd/$$PASSWORD/g" .env

# запуск на проде
prod:
	export UID=$(id -u)
	export GID=$(id -g)
	docker compose -f docker-compose.yml up -d

# запуск разработки
dev:
	export UID=$(id -u)
	export GID=$(id -g)
	docker compose -f docker-compose.dev.yml up -d

# Остановка
down:
	docker compose down

# Когда надо пересобрать фронт и бэк
rebuild:
	docker compose build backend frontend

# Провека того, сколько места занимают данные докера
check:
	docker system df

# Экстерминатус для Linux
exterminatus:
	echo "Checks before cleaning"
	echo "----------------------"
	docker compose down
	echo "----------------------"
	docker system df -v
	echo "----------------------"
	docker system prune -a --volumes
	echo "----------------------"
#	docker volume rm $(docker volume ls -q)
	echo "Checks after cleaning"
	echo "----------------------"
	docker system df -v