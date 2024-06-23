import { Spinner, SpinnerProps } from '@material-tailwind/react';

type TLoadingProps = {
  middle?: boolean;
  relative?: boolean;
} & SpinnerProps;

/** */
export default function Loading({ middle = false, ...props }: TLoadingProps) {
  return (
    <span
      className={middle ? `size-full flex justify-center items-center` : ''}
    >
      <Spinner
        {...props}
        color='teal'
        className={`size-12`}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </span>
  );
}
