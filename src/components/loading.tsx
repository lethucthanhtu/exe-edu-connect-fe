import { Spinner, SpinnerProps } from '@material-tailwind/react';

/** */
export default function Loading({ ...props }: SpinnerProps) {
  return (
    <>
      <Spinner
        {...props}
        color='teal'
        className={`size-12`}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </>
  );
}
