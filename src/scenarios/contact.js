import http from "k6/http"
import { check, sleep } from "k6"

export function contact() {
  const baseURL = `https://www.example.com`

  let res = http.get(`${baseURL}/form/contact-us`);
  check(res, { "Status Code": r => r.status === 200 })

  res = res.submitForm({
    formSelector: '#webform-contact-us',
    fields: {
        is_your_communication_intended_for_the_australian_prudential_reg: 'No',
        understand: 1,
    },
  });

  check(res, { "Status Code": r => r.status === 200 })

  sleep(Math.random() * 5)
}
