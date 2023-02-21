import http from "k6/http"
import { check, sleep } from "k6"

export default function () {
  const baseURL = `https://www.example.com`

  // Check the front page.
  let res = http.get(baseURL)
  check(res, { "status was 200": r => r.status === 200 })
  sleep(Math.random() * 5)

  // Check the search page.
  res = http.get(`${baseURL}/search`)
  check(res, { "status was 200": r => r.status === 200 })
}
