import { Button, Input, Typography } from '@material-tailwind/react';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * resetPassword page
 * @returns JSX.Element
 */
export default function ResetPassword() {
  const { t } = useTranslation();
  return (
    <>
      <div className='flex justify-center w-full'>
        <div className='w-10/12 flex flex-col '>
          <div className='pt-8'>
            <Typography
              className=''
              variant='h5'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('change password'))}
            </Typography>
            <hr className='my-2 border-blue-gray-50' />
            <div className='w-11/12 my-4 grid grid-cols-1 gap-8 '>
              <Input
                className=''
                type='password'
                label={capitalize(t('old password'))}
                icon={
                  <span className='material-symbols-outlined'>password</span>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                className=''
                type='password'
                label={capitalize(t('new password'))}
                icon={
                  <span className='material-symbols-outlined'>password</span>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                className=''
                type='password'
                label={capitalize(t('reenter new password'))}
                icon={
                  <span className='material-symbols-outlined'>password</span>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <Link to={`/home`}>
              <div className='py-4 w-full flex justify-center'>
                <Button
                  className='bg-primary'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {capitalize(t('save change'))}
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
