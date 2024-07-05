import { Button, Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';

/**
 * 404 page
 * @returns JSX.Element
 */
export default function ComingSoon() {
  const { t } = useTranslation();

  return (
    <>
      <div className='size-full flex flex-grow items-center justify-center bg-gray-50'>
        <div className='rounded-lg bg-white p-8 text-center shadow-xl'>
          <h1 className='mb-4 text-6xl font-bold'>500</h1>
          <Typography
            className='text-gray-600 text-2xl'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span className='font-medium mr-1'>
              {`${capitalize(t('Oops!'))}`}
            </span>
            <span className='font-medium mx-1'>
              {`${capitalize(t('Too many traffic'), false)}`}
            </span>
            {`${capitalize(t('Please try again later'))}`}.
          </Typography>
          <Button
            className='mt-4 px-4 py-2 bg-primary'
            size='lg'
            onClick={() => location.reload()}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('Reload page')}
          </Button>
        </div>
      </div>
    </>
  );
}
