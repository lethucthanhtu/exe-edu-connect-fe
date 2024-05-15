import { Typography } from '@material-tailwind/react';

type TSeparatorProps = {
  className?: string;
  label?: string;
};

/**
 * Separator component
 * @returns
 */
export default function Separator({ label, className }: TSeparatorProps) {
  return (
    <>
      <span className={`w-full flex justify-center items-center gap-2 ${className}`}>
        <hr className='w-2/5 border-blue-gray-100' />
        <Typography
          variant='paragraph'
          className='text-blue-gray-200 uppercase text-xs'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {label}
        </Typography>
        <hr className='w-2/5 border-blue-gray-100' />
      </span>
    </>
  );
}
