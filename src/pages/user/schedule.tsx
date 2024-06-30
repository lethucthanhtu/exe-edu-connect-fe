import { Typography } from '@material-tailwind/react';
import { t } from 'i18next';
import { capitalize } from '../../utils/utils';

/**
 * Schedule Component
 */
export default function Schedule() {
  return (
    <>
      <div className='flex justify-center w-full'>
        <div className='w-10/12 flex flex-col '>
          <Typography
            className='pt-8 '
            variant='h5'
            color='blue-gray'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('teach-schedule'))}
          </Typography>
          <hr className='my-2 border-blue-gray-50' />
        </div>
      </div>
    </>
  );
}
