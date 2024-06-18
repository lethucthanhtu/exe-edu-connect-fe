import axios from 'axios';

export const apiCallActivate = false;

// export const BASE_URL = 'https://localhost:8082/';
export const BASE_URL = import.meta.env.VITE_BASE_URL_DEV;
const token = sessionStorage.getItem('token');

export const apiUser = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': BASE_URL,
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export const apiGuest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': BASE_URL,
    // Authorization:
  },
});

const api = token ? apiUser : apiGuest;
export default api;

export const apiProd = apiGuest;

export const apiLocal = axios.create({
  baseURL: 'http://localhost:8082',
  headers: {
    'Access-Control-Allow-Origin': true,
    // Authorization: `Bearer ${token}`,
  },
});