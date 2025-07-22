import http from "k6/http"
import { check } from "k6"

export function httpauth() {
  const username = `example`;
  const password = `com`;
  const credentials = `${username}:${password}`;

  const baseURL = `https://${credentials}@www.example.com`;

  // Check the front page.
  let res = http.get(baseURL);
  check(res, { "Status Code": r => r.status === 200 });
}
