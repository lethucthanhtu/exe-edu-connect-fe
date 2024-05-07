import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';

/**
 * default layout component
 * @returns JSX.Element
 */
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className='mx-44'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
