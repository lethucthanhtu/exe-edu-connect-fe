import { useState } from 'react';
import logo from '../../assets/img/BigLogo.svg';

import { Typography, Input, Button } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

/**
 * login page
 * @returns JSX.Element
 */
export default function Login() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <section className='flex justify-center items-center w-full h-[100vh] bg-gradient-to-t from-primary-medium to-primary-light'>
      <div className='flex xs:flex-col md:!flex-row items-center my-24 w-4/5 h-4/5  rounded-2xl shadow-xl bg-primary-medium'>
        {/* <diva className='flex justify-between items-center w-4/5 h-auto'> */}
          <div className='basis-2/5'>
            <img className='w-4/5 mx-20' src={logo}/>
          </div>

          <div className='py-5 flex flex-col justify-center basis-3/5 h-full '>
            <Typography
              variant='h3'
              color='white'
              className='mb-2 flex justify-center capitalize'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('log in')}
            </Typography>
            <form action='#' className='mx-auto w-9/12 text-left '>
              <div className='mb-6'>
                <Input
                  id='email'
                  color='gray'
                  size='lg'
                  type='email'
                  name='email'
                  placeholder={t('Email')}
                  className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
                  labelProps={{
                    className: 'hidden',
                  }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
              <div className='mb-6'>
                <Input
                  size='lg'
                  placeholder={t('password')}
                  labelProps={{
                    className: 'hidden',
                  }}
                  className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
                  type={passwordShown ? 'text' : 'password'}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>
              <div className='flex justify-between'>
                <Button
                  variant='text'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t('change password')}
                </Button>
                <Button
                  variant='text'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t('forgot password')}
                </Button>
              </div>
              <div className='flex flex-col justify-center'>
                <Button
                  className='w-full text-gray-400 bg-secondary-midBlue'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t('log in')}
                </Button>
                <Button
                  className='mt-4 bg-none'
                  variant='text'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t('register new account')}
                </Button>
              </div>
            </form>
          </div>
        {/* </diva> */}
      </div>
    </section>
  );
}
