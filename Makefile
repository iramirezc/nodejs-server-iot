# initital setup
setup:
	docker volume create iot_api_node_modules
	docker volume create iot_mongo_db

# install node dependencies
install:
	docker-compose run --rm iot-api yarn install

# starts app in development mode
dev:
	docker-compose up iot-api

# stops all containers
stop:
	docker stop iot-api
	docker stop iot-db

# runs only mongodb container
mongo:
	docker-compose up -d iot-db

# executes the mongo shell on the mongodb container
mongo-shell:
	docker exec -it iot-db mongo

# executes the bash on the mongodb container
mongo-bash:
	docker exec -it iot-db bash
