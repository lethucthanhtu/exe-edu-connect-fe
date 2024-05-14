import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import logo from '../assets/edu-connect.svg';

/**
 * Logo Component
 * @returns
 */
export default function Logo() {
  return (
    <Typography
      className='mr-4 cursor-pointer font-medium select-none'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Link to='/' className='flex items-center justify-center'>
        <img className='h-16' src={logo} alt='edu connect' />
        <span className='hidden lg:inline-block'>Edu Connect</span>
      </Link>
    </Typography>
  );
}
