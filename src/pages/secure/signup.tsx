import { useState } from 'react';

import { Typography, Input, Button } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LoginLayout from '../../components/layout/loginLayout';

/**
 * sign up page
 * @returns JSX.Element
 */
export default function Signup() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  return (
    <>
      <LoginLayout>
        <form action='#'>
          <div className='mb-6'>
            <Typography
              variant='h3'
              color='white'
              className='mb-2 flex justify-center capitalize'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('sign up')}
            </Typography>
          </div>

          <div className='mb-4'>
            <Input
              id='role'
              color='gray'
              size='lg'
              type='text'
              name='role'
              placeholder={`${t('tutor/student')}`}
              className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
              labelProps={{
                className: 'hidden',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

          <div className='mb-4'>
            <Input
              id='email'
              color='gray'
              size='lg'
              type='email'
              name='email'
              placeholder={`${t('Email')}...`}
              className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
              labelProps={{
                className: 'hidden',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

          <div className='mb-4'>
            <Input
              id='username'
              color='gray'
              size='lg'
              type='text'
              name='username'
              placeholder={`${t('your name')}...`}
              className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
              labelProps={{
                className: 'hidden',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
          <div className='mb-4'>
            <Input
              size='lg'
              placeholder={`${t('password')}...`}
              labelProps={{
                className: 'hidden ',
              }}
              className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
              type={passwordShown ? 'text' : 'password'}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
          <div className='mb-4'>
            <Input
              size='lg'
              placeholder={`${t('repassword')}...`}
              labelProps={{
                className: 'hidden ',
              }}
              className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
              type={passwordShown ? 'text' : 'password'}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>

          <div className='flex flex-col justify-center mt-20'>
            <Button
              className='w-full text-gray-400 bg-secondary-midBlue'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('log in')}
            </Button>
          </div>
        </form>
      </LoginLayout>
    </>
  );
}
