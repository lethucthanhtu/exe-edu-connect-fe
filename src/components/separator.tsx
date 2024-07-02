import { Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

type TSeparatorProps = {
  className?: string;
  label?: string;
};

type THrProps = {
  width?: string;
};

/** */
function Hr({ width = 'w-full' }: THrProps) {
  return <hr className={`${width} border-blue-gray-100`} />;
}

/**
 * Separator component
 * @returns
 */
export default function Separator({ label, className }: TSeparatorProps) {
  const { t } = useTranslation();
  return (
    <>
      <span
        className={`w-full flex justify-center items-center gap-2 ${className}`}
      >
        {label ? (
          <>
            <Hr width='w-2/5' />
            <Typography
              variant='paragraph'
              className='text-blue-gray-200 uppercase text-xs'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t(label)}
            </Typography>
            <Hr width='w-2/5' />
          </>
        ) : (
          <Hr />
        )}
      </span>
    </>
  );
}
