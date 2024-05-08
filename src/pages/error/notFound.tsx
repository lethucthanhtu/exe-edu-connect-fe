import { Button, Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * 404 page
 * @returns JSX.Element
 */
export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-grow items-center justify-center bg-gray-50'>
        <div className='rounded-lg bg-white p-8 text-center shadow-xl'>
          <h1 className='mb-4 text-4xl font-bold'>404</h1>
          <Typography
            className='text-gray-600'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Oops! The page you are looking for could not be found.
          </Typography>
          <Link to='/'>
            <Button
              className='mt-4 px-4 py-2 bg-primary'
              size='lg'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('Go back to Home')}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
