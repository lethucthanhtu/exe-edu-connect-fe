import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        'Content-Type': 'application.json',
    },
});