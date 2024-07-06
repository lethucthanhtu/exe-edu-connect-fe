import { Typography } from '@material-tailwind/react';
import DoneTick from "../../assets/img/QRMomoTienHoang/DoneTick.png";

/**
 *
 */
export default function CompleteCheckout() {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center'>
        <img src={DoneTick} />
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
