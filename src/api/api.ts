import axios from 'axios';

const URL = 'http://localhost:8082';
export const API_ENDPOINT = `${URL}/api/`;
// const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const token = sessionStorage.getItem('token');

export const apiUser = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Access-Control-Allow-Origin': URL,
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export const apiGuest = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Access-Control-Allow-Origin': URL,
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
