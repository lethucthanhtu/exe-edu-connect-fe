import { Typography } from '@material-tailwind/react';

/**
 *
 */
export default function CompleteCheckout() {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center pt-10 bg-red-100'>
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <span className='material-symbols-outlined'>price_check</span>
        </Typography>
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Almost done
        </Typography>
      </div>
    </>
  );
}
