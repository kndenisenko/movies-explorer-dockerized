install:
	echo "install edpendencies for frontend"
	cd frontend; \
	npm install
	echo "-----"
	echo "install edpendencies for backend"
	cd backend; \
	npm install

prepare-debian:
	cp example.env .env
	JWTKEY=$$(openssl rand -hex 32) && sed -i "s/JWTKEY/$$JWTKEY/g" .env
	PASSWORD=$$(openssl rand -hex 10) && sed -i "s/mongopwd/$$PASSWORD/g" .env

prepare-macos:
	cp example.env .env
	JWTKEY=$$(openssl rand -hex 32) && sed -i '' "s/JWTKEY/$$JWTKEY/g" .env
	PASSWORD=$$(openssl rand -hex 10) && sed -i '' "s/mongopwd/$$PASSWORD/g" .env

up:
	docker compose -f docker-compose.yml up -d

dev:
	docker compose -f docker-compose.dev.yml up -d

down:
	docker compose down

rebuild:
	docker compose build backend frontend