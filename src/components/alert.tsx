import { Alert, AlertProps, Typography } from '@material-tailwind/react';
import { capitalize } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

/** */
function AlertIconOutlined() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className='h-6 w-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
      />
    </svg>
  );
}

/** */
function AlertIconSolid() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='h-6 w-6'
    >
      <path
        fillRule='evenodd'
        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
        clipRule='evenodd'
      />
    </svg>
  );
}

/** */
// function AlertMessage() {}

type TAlertListProps = {
  title?: string;
} & AlertProps;

/** */
export function AlertList({ title = 'alert', ...props }: TAlertListProps) {
  const { t } = useTranslation();
  return (
    <Alert
      {...props}
      className={`${props.className}`}
      variant={props.variant || 'outlined'}
      icon={props.icon || <AlertIconSolid />}
    >
      <Typography
        className='font-medium'
        onPointerEnterCapture={undefined}
        placeholder={undefined}
        onPointerLeaveCapture={undefined}
      >
        {capitalize(t(title))}
      </Typography>
      {props.children}
    </Alert>
  );
}

/** */
export function AlertPopup({ ...props }: AlertProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Alert
        {...props}
        color={props.color || 'red'}
        open={open}
        onClose={() => setOpen(false)}
        icon={props.icon || <AlertIconOutlined />}
        className='absolute !z-max top-2 left-4 w-1/5 animate-shake animate-twice'
      >
        {props.children}
      </Alert>
    </>
  );
}
