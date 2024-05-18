import { useEffect, useState } from 'react';
import { Alert, Button, Checkbox } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { InputEmail, InputPassword } from '../../components/input';
import { FormHeader } from '../../components/form';
import Separator from '../../components/separator';
import api from '../../api/api';
import { AlertPopup } from '../../components/alert';

/**
 * login page
 * @returns JSX.Element
 */
export default function Login() {
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [post, setPost] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) =>
    setPost({ ...post, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .post('/auth/login', { ...post })
      .then((res) => {
        sessionStorage.setItem('token', res.data?.returnData);
        // eslint-disable-next-line no-console
        console.log(res);
        // eslint-disable-next-line no-console
        console.log(sessionStorage.getItem('token'));
      })
      // eslint-disable-next-line no-console
      .catch((err) => setErrorMessage(err.response.data.message));
  };

  return (
    <>
      <form
        // action='#'
        method='post'
        onSubmit={handleSubmit}
        className='flex flex-col size-full gap-4 justify-center items-center'
      >
        <FormHeader label='log in' />
        <div className='flex flex-col justify-center items-center w-full gap-4'>
          <InputEmail onChange={handleInput} name='email' color='teal' />
          <InputPassword onChange={handleInput} name='password' color='teal' />
        </div>

        <div className='flex w-full justify-between'>
          <Checkbox
            label={`${capitalize(t('remember me'))}?`}
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
          <Separator label='or' />
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
      {errorMessage && <AlertPopup>{errorMessage}</AlertPopup>}
    </>
  );
}
