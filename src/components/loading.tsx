import { Spinner, SpinnerProps } from '@material-tailwind/react';

/** */
export default function Loading({ ...props }: SpinnerProps) {
  return (
    <>
      <Spinner
        {...props}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </>
  );
}
