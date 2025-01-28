#!/usr/bin/make -f

IMAGE=docker.io/grafana/k6
SCENARIO=scenarios/basic.js
VUS=1

run:
	docker run --network=host --rm -e 'K6_INFLUXDB_PUSH_INTERVAL=1s' -e 'K6_OUT=influxdb=http://localhost:8086/k6' -i ${IMAGE} run - < ${SCENARIO}

start:
	docker compose up --force-recreate -d

stop:
	docker compose down
