import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
