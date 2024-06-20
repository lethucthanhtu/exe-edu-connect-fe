import { Button, ButtonProps } from '@material-tailwind/react';
import { capitalize } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { GOOGLE_LOGIN_URL, GOOGLE_SIGNUP_URL } from '../utils/config';

type TGoogleButtonProps = {
  type: 'login' | 'signup';
  roleId?: string | number;
} & Omit<
  ButtonProps,
  | 'placeholder'
  | 'onPointerEnterCapture'
  | 'onPointerLeaveCapture'
  | 'variant'
  | 'color'
  | 'className'
  | 'children'
  | 'type'
>;

/** */
export default function GoogleButton({
  type = 'login',
  roleId = '0',
  ...props
}: TGoogleButtonProps) {
  const { t } = useTranslation();

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    window.location.href = GOOGLE_LOGIN_URL;
  };

  const handleGoogleRegistration = (event) => {
    event.preventDefault();
    window.location.href = `${GOOGLE_SIGNUP_URL}${roleId}`;
  };

  return (
    <>
      <Button
        {...props}
        variant='outlined'
        color='blue-gray'
        className='flex justify-center items-center gap-3 border-primary'
        onClick={
          props.onClick || type === 'login'
            ? handleGoogleLogin
            : handleGoogleRegistration
        }
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <img
          src='https://docs.material-tailwind.com/icons/google.svg'
          alt='google'
          className='size-4'
        />
        {capitalize(t(`Continue with Google`), false)}
      </Button>
    </>
  );
}
