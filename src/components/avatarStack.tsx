import { Avatar } from '@material-tailwind/react';
import { size } from '@material-tailwind/react/types/components/avatar';
import src from '@tailwindcss/line-clamp';
import axios from 'axios';
import { useEffect, useState } from 'react';

type TAvatarStackProps = {
  numberOfAvatar?: number;
  size?: size;
};

/**
 *
 * @returns
 */
export function AvatarStack({
  numberOfAvatar = 2,
  size = 'md',
}: TAvatarStackProps) {
  const avatars = Array(numberOfAvatar).fill('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className='flex items-center -space-x-4'>
      {avatars.map(() => (
        <Avatar
          variant='circular'
          alt='user 1'
          size={size}
          className='border-2 border-primary hover:z-10 focus:z-10'
          src='https://avatar.iran.liara.run/public'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      ))}
    </div>
  );
}
