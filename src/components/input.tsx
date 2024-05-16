import { Input, Typography, type InputProps } from '@material-tailwind/react';
import { propTypesInputProps } from '@material-tailwind/react/types/components/slider';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../utils/utils';

type TInputEmailProps = Omit<
  InputProps,
  | 'type'
  | 'label'
  | 'onPointerEnterCapture'
  | 'onPointerEnterCapture'
  | 'crossOrigin'
  | 'required'
>;

/** */
export function InputEmail({ ...props }: TInputEmailProps) {
  return (
    <>
      <Input
        {...props}
        required
        type='email'
        label='Email'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </>
  );
}

type TInputPasswordProps = {
  isConfirmPassword?: boolean | 'true' | 'false';
  isShowCapsLockAlert?: boolean | 'true' | 'false';
} & Omit<TInputEmailProps, 'onKeyDown'>;

/** */
export function InputPassword({
  isConfirmPassword = false,
  isShowCapsLockAlert = false,
  ...props
}: TInputPasswordProps) {
  const { t } = useTranslation();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  isConfirmPassword = Boolean(isConfirmPassword);
  isShowCapsLockAlert = Boolean(isShowCapsLockAlert);

  return (
    <div className='w-full flex flex-col justify-center items-center gap-0.5'>
      <Input
        {...props}
        onKeyDown={(event) =>
          setIsCapsLockOn(event.getModifierState('CapsLock'))
        }
        label={capitalize(t(isConfirmPassword ? 'repassword' : 'password'))}
        required
        className={`w-full ${props.className}`}
        type={passwordShown ? 'text' : 'password'}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
      {!isShowCapsLockAlert && (
        <Typography
          variant='paragraph'
          className={`mt-2 w-full flex justify-start items-center gap-2 text-xs ${
            !isCapsLockOn ? 'hidden' : 'animate-shake'
          }`}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='yellow'
            className='h-6 w-6'
          >
            <path
              fillRule='evenodd'
              d='M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
              clipRule='evenodd'
            />
          </svg>
          <span>CapsLock is on</span>
        </Typography>
      )}
    </div>
  );
}

type TInputPasswordGroupCheckProps = {
  isAllowValidate?: boolean | 'true' | 'false';
  isShowValidateHint?: boolean | 'true' | 'false';
} & Omit<TInputPasswordProps, 'isShowCapsLockAlert' | 'isConfirmPassword'>;

/** */
export function InputPasswordGroupCheck({
  isAllowValidate = true,
  isShowValidateHint = true,
  ...props
}: TInputPasswordGroupCheckProps) {
  isAllowValidate = Boolean(isAllowValidate);
  isShowValidateHint = Boolean(isShowValidateHint);
  return (
    <>
      <InputPassword {...props} />
      <InputPassword
        {...props}
        isShowCapsLockAlert='false'
        isConfirmPassword='true'
      />
    </>
  );
}
