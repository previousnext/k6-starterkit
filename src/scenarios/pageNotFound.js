import http from 'k6/http';
import { check, sleep } from 'k6';

export function pageNotFound() {
  const baseURL = `https://www.example.com`;

  let cacheBuster = Date.now();

  // Check the front page.
  let res = http.get(`${baseURL}/load-test/${cacheBuster}`);
  check(res, { "Status Code": r => r.status === 404 });
  sleep(Math.random() * 5);
}
