import axios from 'axios';

// const url = import.meta.env.VITE_API_ENDPOINT;
const url = 'http://localhost:8082/api/';
// const url = 'https://wifeed.vn/api/';
const token = sessionStorage.getItem('token');

export const apiUser = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': true,
    Authorization: `Bearer ${token}`,
  },
});

export const apiGuest = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': true,
    // Authorization:
  },
});

const api = token ? apiUser : apiGuest;
export default api;

export const apiProd = apiGuest;

export const apiLocal = axios.create({
  baseURL: 'http://localhost:8082/api/',
  headers: {
    'Access-Control-Allow-Origin': true,
    // Authorization: `Bearer ${token}`,
  },
});

export const apiReqres = axios.create({
  baseURL: 'https://reqres.in/api/',
});
