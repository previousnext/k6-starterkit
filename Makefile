#!/usr/bin/make -f

IMAGE=docker.io/grafana/k6
CONFIG=check

run:
	docker run --network=host -v `pwd`:/k6 -w /k6 --rm -e 'K6_INFLUXDB_PUSH_INTERVAL=1s' -e 'K6_OUT=influxdb=http://localhost:8086/k6' -e 'DCS_ENVIRONMENT='${DCS_ENVIRONMENT} -i ${IMAGE} --config config/${CONFIG}.json run src/k6.js

start:
	docker compose up --force-recreate -d

stop:
	docker compose down
