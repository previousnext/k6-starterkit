import http from "k6/http"
import { check, sleep } from "k6"

export const options = {
  stages: [
    { target: 10, duration: '30s' },
    { target: 20, duration: '30s' },
    { target: 30, duration: '30s' },
    { target: 40, duration: '30s' },
    { target: 50, duration: '30s' },
    { target: 60, duration: '30s' },
    { target: 70, duration: '60s' },
    { target: 80, duration: '60s' },
    { target: 90, duration: '60s' },
    { target: 100, duration: '60s' },
    { target: 150, duration: '60s' },
    { target: 200, duration: '60s' },
    { target: 300, duration: '60s' },
    { target: 350, duration: '60s' },
    { target: 400, duration: '60s' },
    { target: 500, duration: '60s' },
    { target: 600, duration: '60s' },
    { target: 700, duration: '60s' },
    { target: 800, duration: '60s' },
    { target: 900, duration: '60s' },
  ],
};

export default function () {
  const baseURL = `https://www.example.com`

  let cacheBuster = Date.now();

  // Check the front page.
  let res = http.get(`${baseURL}/load-test/${cacheBuster}`)
  check(res, { "status was 200": r => r.status === 200 })
  sleep(Math.random() * 5)
}
