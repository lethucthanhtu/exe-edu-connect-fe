import { Button, Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { useNavigate } from "react-router-dom";
/**
 * 404 page
 * @returns JSX.Element
 */
export default function ComingSoon() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const routeChange = (event) => {
    event.preventDefault();
    const path = '/';
    navigate(path);
  }
  return (
    <>
      <div className='size-full flex flex-grow items-center justify-center bg-gray-50'>
        <div className='rounded-lg bg-white p-8 text-center shadow-xl'>
          <h1 className='mb-4 text-6xl font-bold'>404</h1>
          <Typography
            className='text-gray-600 text-2xl'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span className='font-medium mr-1'>
              {`${capitalize(t('Oops!'))}`}
            </span>
            {`${capitalize(t('Nothing here.'), false)}`}
            <span className='font-medium mx-1'>
              {`${capitalize(t("We'll be back soon"))}`}
            </span>
            .
          </Typography>
          <Link to='/'>
            <Button
              className='mt-4 px-4 py-2 bg-primary'
              size='lg'
              placeholder={undefined}
              onClick={routeChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {/* {t('Go back to Home')} */}
              Go back to Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
