install:
	echo "install edpendencied for front-end"
	cd frontend; \
	npm install
	echo "-----"
	echo "install edpendencied for back-end"
	cd backend; \
	npm install

prepare-debian:
	cp backend/example.env backend/.env
	JWTKEY=$$(openssl rand -hex 32) && sed -i "s/JWTKEY/$$JWTKEY/g" backend/.env
	PASSWORD=$$(openssl rand -hex 10) && sed -i "s/mongopwd/$$PASSWORD/g" backend/.env

prepare-macos:
	cp backend/example.env backend/.env
	JWTKEY=$$(openssl rand -hex 32) && sed -i '' "s/JWTKEY/$$JWTKEY/g" backend/.env
	PASSWORD=$$(openssl rand -hex 10) && sed -i '' "s/mongopwd/$$PASSWORD/g" backend/.env