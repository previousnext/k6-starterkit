k6 starterkit
=============

A starterkit for load testing sites with [k6](https://k6.io).

## What should I do with this starterkit?

- Copy this starterkit into your application code base.
- Add scenarios which are more appropriate for your project.
- Adjust the base vitual users in the Makefile.
- Execute a test with `make run`.

## Example scenarios

- **basic.js** - A simple script demonstrating how to check a page and wait t
- **cookie.js** - How to use cookies to avoid logging into a site.
- **httpauth.js** - How to test a site with http authentication configured.

## Grafana dashboard

- `make start` to fire up the container.
- Visit http://localhost:3000 to view the dashboard.
- `make stop` to shut everything down when you're finished.