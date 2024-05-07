import i18n from 'i18next';
import AppRouter from './routers/routes';

/**
 *  App
 *  @returns JSX.Element
 */
export default function App() {
    i18n.changeLanguage(localStorage.getItem('usrLng'));
    return (
        <div className='font-body flex flex-col h-screen justify-between selection:bg-green-300 selection:text-green-900'>
            <AppRouter />
        </div>
    );
}
