import { Button, Input, Typography } from '@material-tailwind/react';
import logo from '../../assets/img/BigLogo.svg';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
/**
 * loginLayout component
 * @returns JSX.Element
 */
export default function LoginLayout({ children }) {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  return (
    <section className='flex justify-center items-center w-full h-[100vh] bg-gradient-to-t from-primary-medium to-primary-light'>
      <div className='flex xs:flex-col md:!flex-row items-center my-24 w-4/5 h-4/5  rounded-2xl shadow-xl bg-primary-medium'>
        {/* <diva className='flex justify-between items-center w-4/5 h-auto'> */}
        <div className='basis-2/5'>
          <img className='w-4/5 mx-20' src={logo} />
        </div>

        <div className='py-5 flex flex-col justify-center basis-3/5 h-full '>
          
          <div className='mx-auto w-9/12 text-left '>{children}</div>
        </div>
        {/* </diva> */}
      </div>
    </section>
  );
}
