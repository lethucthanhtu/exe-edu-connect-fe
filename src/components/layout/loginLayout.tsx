import logo from '../../assets/img/BigLogo.svg';
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
    <section className='flex justify-center items-start md:items-center size-full bg-gradient-to-t from-primary-medium to-primary-light'>
      <div className='flex xs:flex-col md:!flex-row justify-center items-center gap-4 xs:mt-4 md:!my-auto py-4 xs:w-full md:!size-4/5 rounded-2xl shadow-xl bg-primary-medium'>

        <div className='basis-2/5 size-full hidden md:flex xs:justify-center md:!justify-end items-center'>
          <img className='xs:w-3/5 md:!w-4/5' src={logo} />
        </div>

        <div className='basis-3/5 size-full flex flex-col justify-center items-center'>
          <div className='w-2/3 text-left '>{children}</div>
        </div>
      </div>
    </section>
  );
}
