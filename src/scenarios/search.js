import http from 'k6/http';
import { check, sleep } from 'k6';

export function search() {
  const baseURL = `https://www.example.com`;

  let cacheBuster = Date.now();

  // Check the front page.
  let res = http.get(`${baseURL}/search?query=testing&lt=${cacheBuster}`);
  check(res, { "Status Code": r => r.status === 200 });
}
