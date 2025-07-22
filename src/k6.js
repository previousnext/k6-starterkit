import http from 'k6/http';
import { check, sleep } from 'k6';

// This will be merged with options from config files.
export const options = {
  userAgent: 'PreviousnextLoadTesterKit/1.0',
};

export { pageNotFound } from './scenarios/pageNotFound.js';
export { search } from './scenarios/search.js';
export { basic } from './scenarios/basic.js';
export { cookie } from './scenarios/cookie.js';
export { frontpage } from './scenarios/frontpage.js';
export { httpauth } from './scenarios/httpauth.js';

