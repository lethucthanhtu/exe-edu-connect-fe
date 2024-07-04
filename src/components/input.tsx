import { Input, Typography, type InputProps } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { capitalize, validatePwd } from '../utils/utils';

type TInputEmailProps = Omit<
  InputProps,
  | 'type'
  | 'label'
  | 'onPointerEnterCapture'
  | 'onPointerEnterCapture'
  | 'crossOrigin'
>;

/** */
export function InputEmail({ ...props }: TInputEmailProps) {
  return (
    <>
      <Input
        {...props}
        color={props.color || 'teal'}
        // required
        type='email'
        label='Email'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </>
  );
}

/** */
// function CapsLockAlert({ alo: boolean }) {
//   // const [isCapsLockOn, setIsCapsLockOn] = useState(false);
//   const isCapsLockOn = alo;
//   return (
//     <>
//       <Typography
//         variant='paragraph'
//         className={`mt-2 w-full flex justify-start items-center gap-2 text-xs ${
//           !isCapsLockOn ? 'hidden' : 'animate-shake'
//         }`}
//         placeholder={undefined}
//         onPointerEnterCapture={undefined}
//         onPointerLeaveCapture={undefined}
//       >
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           viewBox='0 0 24 24'
//           fill='red'
//           className='size-6'
//         >
//           <path
//             fillRule='evenodd'
//             d='M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
//             clipRule='evenodd'
//           />
//         </svg>
//         <span>CapsLock is on</span>
//       </Typography>
//     </>
//   );
// }

type TInputPasswordProps = {
  isConfirmPassword?: boolean | 'true' | 'false';
  isShowCapsLockAlert?: boolean | 'true' | 'false';
} & TInputEmailProps;
// & Omit<TInputEmailProps, 'onKeyDown'>;

/** */
export function InputPassword({
  isConfirmPassword = false,
  isShowCapsLockAlert = false,
  ...props
}: TInputPasswordProps) {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  isConfirmPassword = Boolean(isConfirmPassword);
  isShowCapsLockAlert = Boolean(isShowCapsLockAlert);

  const handleKeydown = (event) =>
    setIsCapsLockOn(event.getModifierState('CapsLock'));

  return (
    <div className='w-full flex flex-col justify-center items-center gap-0.5'>
      <Input
        {...props}
        onKeyDown={props.onKeyDown || handleKeydown}
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
            fill='red'
            className='size-6'
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

  // const validatePwd = (pwd: string) => {
  //   const isValid =
  //     pwd.length >= 8 &&
  //     /[A-Z]/.test(pwd) && // Contains an uppercase letter
  //     /[a-z]/.test(pwd) && // Contains a lowercase letter
  //     /[0-9]/.test(pwd) && // Contains a number
  //     /[~!@#$%^&*]/.test(pwd); // Contains a special character
  //   return isValid;
  // };

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);

    if (!pwd) setPasswordError('');
    else if (!validatePwd(pwd))
      setPasswordError(
        'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character.'
      );
    else setPasswordError('');
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setConfirmPassword(pwd);

    if (pwd !== password) setConfirmPasswordError('Passwords do not match.');
    else setConfirmPasswordError('');
  };

  return (
    <>
      <InputPassword
        {...props}
        color={passwordError ? 'red' : props.color}
        value={password}
        onChangeCapture={handlePasswordChange}
      />
      <InputPassword
        {...props}
        name={`re-${props.name}`}
        color={confirmPasswordError ? 'red' : props.color}
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        isShowCapsLockAlert='false'
        isConfirmPassword='true'
      />
      {confirmPasswordError && (
        <span className='text-red-300 w-full'>{confirmPasswordError}</span>
      )}
      {passwordError && <span className='text-red-300'>{passwordError}</span>}
      {/* {passwordError && (
          <AlertList color='teal' title='alo title'>
            <ul>
              <li>alo</li>
              <li>alo</li>
              <li>alo</li>
              <li>alo</li>
              <li>alo</li>
            </ul>
          </AlertList>
        )} */}
    </>
  );
}
