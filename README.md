k6 starterkit
=============

A starterkit for load testing sites with [k6](https://k6.io).

## What should I do with this starterkit?

- Copy this starterkit.
- Add scenarios which are more appropriate for your project.
- Update `src/k6.js` to register the scenarios.
- Adjust or create `config/` files for your test run.
- Execute a test with `mise scenario [scenario]`.

## Example scenarios

- **basic.js** - A simple script demonstrating how to check a page and wait.
- **cookie.js** - How to use cookies to avoid logging into a site.
- **httpauth.js** - How to test a site with http authentication configured.

## Grafana dashboard

- `mise start` to fire up the container.
- Visit http://localhost:3000 to view the dashboard.
- Open 'Dashboards > k6 Load Testing Results'.
- `mise stop` to shut everything down when you're finished.
