import i18n from 'i18next';
import AppRouter from './routers/routes';
import axios from 'axios';
import { useEffect } from 'react';

/**
 *  App
 *  @returns JSX.Element
 */
export default function App() {
  i18n.changeLanguage(localStorage.getItem('usrLng'));
  localStorage.setItem('id', '123');

  //keep BE API alive
  useEffect(() => {
    const URL = import.meta.env.VITE_API_ENDPOINT;
    const handleInterval = () => {
      axios
        .get(`${URL}hello`)
        .then()
        .catch();
    };

    const intervalId = setInterval(handleInterval, 120000); // 120000ms = 2 minutes

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AppRouter className='font-body flex flex-col h-screen justify-between selection:bg-green-300 selection:text-green-900' />
  );
}
