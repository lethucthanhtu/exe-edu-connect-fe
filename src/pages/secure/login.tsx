import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Checkbox } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import { InputEmail, InputPassword } from '../../components/input';
import { FormHeader } from '../../components/form';
import { AlertPopup } from '../../components/alert';
import Separator from '../../components/separator';

import api from '../../api/api';
import { capitalize } from '../../utils/utils';
import Loading from '../../components/loading';
import { LOGIN_URL } from '../../utils/config';
import GoogleButton from '../../components/googleButton';

/**
 * login page
 * @returns JSX.Element
 */
export default function Login() {
  const { t } = useTranslation();

  const userRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [post, setPost] = useState({
    email: '',
    password: '',
  });

  //focus on email when load page
  useEffect(() => userRef.current.focus(), []);

  const handleInput = (event) =>
    setPost({ ...post, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    api
      .post(LOGIN_URL, { ...post })
      .then((res) => {
        const token = res.data?.returnData;
        localStorage.setItem('token', token);
        setLoading(false);
      })
      .catch((err) => setErrorMessage(err.response.data.message))
      .finally(() => {
        setLoading(false);
        localStorage.getItem('token') && location.reload();
      });
  };

  //check if user already login/ token still available or not
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
          <InputEmail
            required
            inputRef={userRef}
            onChange={handleInput}
            name='email'
            color='teal'
          />
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
          {/* <GoogleButton type='login' /> */}
          <Separator label='or' />
          <Link to={'/signup'}>
            <Button
              className='w-full bg-none text-primary'
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
      {loading && (
        <div className='absolute size-full top-0 left-0'>
          <Loading middle />
        </div>
      )}
      {errorMessage && <AlertPopup>{errorMessage}</AlertPopup>}
    </>
  );
}
