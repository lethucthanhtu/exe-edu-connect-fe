import { Outlet } from 'react-router-dom';
import Header from '../header';

/**
 * no header layout component
 * @returns JSX.Element
 */
export default function NoFooterLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
