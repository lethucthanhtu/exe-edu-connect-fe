import axios from 'axios';
import { BASE_URL } from '../utils/config';

export const apiAliveKeeper = false;

const token = localStorage.getItem('token');

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
  },
});

const api = token ? apiUser : apiGuest;
export default api;

//For testing

export const apiProd = apiGuest;

export const apiLocal = axios.create({
  baseURL: 'http://localhost:8082',
  headers: {
    'Access-Control-Allow-Origin': true,
    // Authorization: `Bearer ${token}`,
  },
});