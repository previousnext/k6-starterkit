import http from "k6/http"
import { check, sleep } from "k6"

export function frontpage() {
  const baseURL = `https://www.example.com`

  // Check the front page.
  let res = http.get(baseURL)
  check(res, { "Status Code": r => r.status === 200 })
}
