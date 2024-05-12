import { useState } from 'react';
import { Typography, Input, Button } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LoginLayout from '../../components/layout/loginLayout';

/**
 * login page
 * @returns JSX.Element
 */
export default function Login() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <LoginLayout>
      <form
        action='#'
        className='flex flex-col gap-4 justify-center items-center'
      >
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
        <div className='flex flex-col justify-center items-center w-full gap-4'>
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
        <div className='flex w-full justify-between'>
          <Link to={''}>
            <Button
              className='w-full'
              variant='text'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('change password')}
            </Button>
          </Link>
          <Link to={''}>
            <Button
              className='w-full'
              variant='text'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('forgot password')}
            </Button>
          </Link>
        </div>
        <div className='flex flex-col w-full gap-4 justify-center'>
          <Button
            className='w-full text-gray-400 bg-secondary-midBlue'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('log in')}
          </Button>
          <Link to={'/signup'}>
            <Button
              className='w-full bg-none'
              variant='text'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('register new account')}
            </Button>
          </Link>
        </div>
      </form>
    </LoginLayout>
  );
}
