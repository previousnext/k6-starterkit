import http from "k6/http"
import { check } from "k6"

export default function () {
  // NOTE: Log into the site as a user and use their cookie for the test.
  const cookies = {
    SSESS_CHANGE_ME: {
      value: "CHANGE_ME",
      replace: true,
    },
  }

  const baseURL = `https://www.example.com`

  // Check the front page.
  let res = http.get(baseURL, { cookies })
  check(res, { "status was 200": r => r.status === 200 })
}
