import i18n from 'i18next';
import AppRouter from './routers/routes';

/**
 *  App
 *  @returns JSX.Element
 */
export default function App() {
    i18n.changeLanguage(localStorage.getItem('usrLng'));
    return (
        <div className='font-body flex flex-col h-screen justify-between'>
            <AppRouter />
        </div>
    );
}
