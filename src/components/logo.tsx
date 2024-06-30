import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import logo from '../assets/edu-connect.svg';

type TLogoProps = {
  className?: string;
};

/**
 * Logo Component
 * @returns
 */
export default function Logo({ className }: TLogoProps) {
  return (
    <div className={className}>
      <Typography
        className='mr-4 cursor-pointer font-medium select-none'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link
          to='/home'
          replace
          className='flex gap-0.5 items-center justify-center'
        >
          <img className='h-16 aspect-square' src={logo} alt='edu connect' />
          <span className='hidden lg:inline-block'>Edu Connect</span>
        </Link>
      </Typography>
    </div>
  );
}
