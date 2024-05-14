import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import Logo from '../logo';

import business_svg from '../../assets/svg/undraw_business_deal.svg';

/**
 * loginLayout component
 * @returns JSX.Element
 */
export default function LoginLayout() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <>
      {/* <section className='relative overflow-hidden flex justify-center items-start md:items-center size-full bg-gradient-to-t from-primary-medium to-primary-light'>
        <div className='z-20 mx-2 md:!mx-0 flex xs:flex-col md:!flex-row justify-center items-center gap-4 xs:mt-4 md:!my-auto py-4 xs:w-full md:!size-4/5 rounded-2xl shadow-xl bg-primary-medium'>
          <div className='basis-2/5 size-full hidden md:flex xs:justify-center md:!justify-end items-center'>
            <img className='xs:w-3/5 md:!w-4/5' src={logo} />
          </div>
          <div className='basis-3/5 size-full flex flex-col justify-center items-center'>
            <div className='w-2/3'>
              <Outlet />
            </div>
          </div>
        </div>
        <span className='z-10 absolute -bottom-[3%] -right-[10%] bg-gradient-to-tl from-primary-sub to-primary-light w-[25%] aspect-square rounded-full' />
        <span className='z-30 absolute bottom-8 left-7 bg-gradient-to-br from-primary-sub to-primary-light w-[15%] aspect-square rounded-full' />
        <span className='z-40 absolute bottom-0 left-2 bg-gradient-to-tl from-primary-sub to-primary-light w-[10%] aspect-square rounded-full' />
        <span className='z-50 absolute top-[3%] -left-[8%] bg-gradient-to-tr from-primary-sub to-primary-light w-[20%] aspect-square rounded-full' />
      </section> */}
      <section className='relative overflow-hidden flex justify-center items-start md:!items-center size-full bg-gray-100'>
        <div className='z-30 flex py-2 md:!py-0 mx-4 md:!mx-0 w-full md:!size-4/5 justify-center items-center gap-4 rounded-2xl shadow-xl bg-white'>
          <div className='w-5/12 h-full hidden md:flex flex-col justify-evenly items-center'>
            <div className='flex w-full justify-start items-center'>
              <Logo />
            </div>
            <img className='size-4/5' src={business_svg} />
          </div>
          <div className='w-full md:!w-6/12 h-full flex md:flex-col justify-center items-center'>
            <div className='w-2/3'>
              <Outlet />
            </div>
          </div>
        </div>
        <div className='z-10 absolute aspect-square bg-primary/80 w-[200%] rounded-full shadow-2xl rotate-180 top-1/3 flex justify-center items-center'>
          <span className='z-20 aspect-square bg-primary-sub size-[98%] rounded-full' />
        </div>
      </section>
    </>
  );
}
