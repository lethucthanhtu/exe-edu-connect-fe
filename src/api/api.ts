import axios from 'axios';

// const url = import.meta.env.VITE_API_ENDPOINT;
// const url = 'http://localhost:8082/api/auth/';
// const url = 'https://wifeed.vn/api/';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Access-Control-Allow-Origin': true,
  },
});

export const apiProd = api;

export const apiLocal = axios.create({
  baseURL: 'http://localhost:8082/api/auth/',
  headers: {
    'Access-Control-Allow-Origin': true,
  },
});

export const apiTest = axios.create({
  baseURL: 'https://wifeed.vn/api/',
});
