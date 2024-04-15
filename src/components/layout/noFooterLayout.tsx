import { Outlet } from 'react-router-dom';
import Header from '../header';

export default function NoFooterLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
