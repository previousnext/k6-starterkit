#!/usr/bin/make -f

IMAGE=docker.io/grafana/k6
SCENARIO=scenarios/basic.js
VUS=2

run:
	docker run --rm -i ${IMAGE} run - --vus ${VUS} --duration 300s < ${IMAGE}