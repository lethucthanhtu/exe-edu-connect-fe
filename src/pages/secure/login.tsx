import { useState } from 'react';
import { Typography, Input, Button, Checkbox } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';

/**
 * login page
 * @returns JSX.Element
 */
export default function Login() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <>
      {/* <form
        action='#'
        className='flex flex-col gap-4 justify-center items-center '
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

          <Link to={'/forgotPassword'}>
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
          <Link to={'/home'}>
            <Button
              className='w-full text-gray-400 bg-secondary-midBlue'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('log in')}
            </Button>
          </Link>

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
      </form> */}
      <form
        action='#'
        className='flex flex-col size-full gap-4 justify-center items-center'
      >
        <Typography
          variant='h3'
          color='teal'
          className='mb-4 flex justify-center capitalize'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {t('log in')}
        </Typography>

        <div className='flex flex-col justify-center items-center w-full gap-4'>
          <Input
            color='teal'
            type='email'
            size='lg'
            label='Email'
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />

          <Input
            color='teal'
            size='lg'
            label='Password'
            className='w-full'
            type={passwordShown ? 'text' : 'password'}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div className='flex w-full justify-between'>
          <Checkbox
            label={capitalize(t('remember me?'))}
            color='teal'
            className='label:text-primary'
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />

          <Link to={'/forgotPassword'}>
            <Button
              className='w-full text-primary'
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
            type='submit'
            className='w-full bg-secondary-midBlue'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('log in')}
          </Button>
          <Button
            variant='outlined'
            color='blue-gray'
            className='flex justify-center items-center gap-3 border-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <img
              src='https://docs.material-tailwind.com/icons/google.svg'
              alt='google'
              className='size-4'
            />
            Continue with Google
          </Button>
          <hr className='mt-2 border-blue-gray-50' />

          <Link to={'/signup'}>
            <Button
              className='w-full bg-none text-primary'
              // color='teal'
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
    </>
  );
}
