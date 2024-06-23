import i18n from 'i18next';
import AppRouter from './routers/routes';
import axios from 'axios';
import { useEffect } from 'react';
import api from './api/api';

/**
 *  App
 *  @returns JSX.Element
 */
export default function App() {
  i18n.changeLanguage(localStorage.getItem('usrLng'));

  //keep BE API alive
  useEffect(() => {
    const PRD_URL = import.meta.env.VITE_API_ENDPOINT;

    const handleInterval = () => {
      axios.get(`${PRD_URL}hello`).then().catch();
      api.get(`hello`).then().catch();
    };

    const min = 2;
    const intervalId = setInterval(handleInterval, min * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppRouter className='font-body flex flex-col h-screen justify-between items-center selection:bg-green-300 selection:text-green-900' />
  );
}
