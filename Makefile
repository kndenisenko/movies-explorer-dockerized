# Если надо запускать без докера
install:
	echo "install edpendencies for frontend"
	cd frontend; \
	npm install
	echo "-----"
	echo "install edpendencies for backend"
	cd backend; \
	npm install

# Подготовка ENV-файла
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
up:
	docker compose -f docker-compose.yml up -d

# Остановка
down:
	docker compose down

# запуск разработки
dev:
	docker compose -f docker-compose.dev.yml up -d

# когда надо пересобрать контейнеры
rebuild:
	docker compose build backend frontend