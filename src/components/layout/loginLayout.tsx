import { Outlet, useNavigate } from 'react-router-dom';

import Logo from '../logo';
import theBoy_png from '../../assets/img/theboy.png';
import LanguageButton from '../language.button';
import { useEffect } from 'react';

/**
 * loginLayout component
 * @returns JSX.Element
 */
export default function LoginLayout() {
  const navigate = useNavigate();
  useEffect(
    () => sessionStorage.getItem('token') && navigate('/', { replace: true }),
    [navigate]
  );

  return (
    <>
      <section className='relative overflow-hidden flex justify-center items-start md:!items-center size-full bg-gray-100'>
        <div className='z-30 flex w-full py-2 md:!py-0 mt-6 mx-4 md:!m-0 md:!size-4/5 justify-center items-center gap-4 rounded-2xl shadow-xl bg-white'>
          <div className='w-5/12 h-full hidden md:flex flex-col justify-evenly items-center'>
            <Logo className='flex w-full justify-start items-center' />
            <div className='relative h-4/5 w-full bottom-4 flex justify-center items-center'>
              <img className='z-20 h-full' src={theBoy_png} />
              <span className='absolute aspect-square rounded-full w-3/5 bg-primary-sub' />
              <span className='absolute bottom-2 w-4/5 h-[5%] rounded-[50%] bg-primary-sub' />
            </div>
          </div>
          <div className='size-full md:!w-6/12 flex md:flex-col justify-center items-center'>
            <div className='w-2/3 h-full'>
              <Outlet />
            </div>
          </div>
        </div>
        <img
          className='z-20 absolute h-[110%] bottom-1 -left-[7.5%]'
          src={theBoy_png}
        />
        <span className='z-10 absolute aspect-square bg-primary-sub w-[275%] rounded-full shadow-2xl rotate-180 top-[65%] flex justify-center items-center' />
        <LanguageButton className='z-50 absolute bottom-2 md:!top-2 right-2 bg-white md:!bg-transparent' />
      </section>
    </>
  );
}
