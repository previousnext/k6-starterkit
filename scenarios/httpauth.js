import http from "k6/http"
import { check } from "k6"

export default function () {
  const credentials = `${username}:${password}`;

  const baseURL = `https://${credentials}@www.example.com`

  // Check the front page.
  let res = http.get(baseURL)
  check(res, { "status was 200": r => r.status === 200 })
}
