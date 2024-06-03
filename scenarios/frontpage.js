import http from "k6/http"
import { check, sleep } from "k6"

export const options = {
  stages: [
    { target: 50, duration: '30s' },
    { target: 100, duration: '30s' },
    { target: 200, duration: '30s' },
    { target: 300, duration: '30s' },
    { target: 400, duration: '30s' },
    { target: 500, duration: '30s' },
  ],
};

export default function () {
  const baseURL = `https://www.example.com`

  // Check the front page.
  let res = http.get(baseURL)
  check(res, { "status was 200": r => r.status === 200 })
}
