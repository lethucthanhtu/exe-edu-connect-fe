import { Button, Input, Typography } from '@material-tailwind/react';
// import { useRef, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import api from '../../api/api';
import { useEffect, useState } from 'react';
import { TUser } from '../../entity/user';

interface ProfileContextType {
  isCUserProfile: boolean;
}

/**
 * profile page
 * @returns JSX.Element
 */
export default function Profile() {
  // const [ck, setCK] = useState();
  const { t } = useTranslation();
  const { isCUserProfile } = useOutletContext<ProfileContextType>();
  const [user, setUser] = useState<TUser>();
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/api/users/${id}`)
      .then((res) => {
      setUser(res.data.returnData);
      // eslint-disable-next-line no-console
      // console.log(res.data.returnData);
    });
  }, [id])
  
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
            {capitalize(t('profile'))}
          </Typography>
          <hr className='my-2 border-blue-gray-50' />
          <div className='my-8 grid grid-cols-2 gap-8'>
            <div className='col-span-2'>
              <Input
                defaultValue={user?.fullname}
                variant='outlined'
                label={capitalize(t('full name'))}
                disabled={!isCUserProfile}
                placeholder=''
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='col-span-2'>
              <Input
                defaultValue={user?.dateofbirth}
                type='date'
                variant='outlined'
                label={capitalize(t('day of birth'))}
                disabled={!isCUserProfile}
                placeholder=''
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <hr className='my-2 border-blue-gray-50' />
          <div className='my-8 grid grid-cols-2 gap-8'>
            <div>
              <Input
                defaultValue={user?.email}
                variant='outlined'
                label={capitalize(t('email'))}
                disabled={!isCUserProfile}
                placeholder=''
                icon={<span className='material-symbols-outlined'>mail</span>}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div>
              <Input
                defaultValue={user?.phone}
                variant='outlined'
                label={capitalize(t('phone number'))}
                disabled={!isCUserProfile}
                placeholder=''
                icon={
                  <span className='material-symbols-outlined'>
                    phone_iphone
                  </span>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='col-span-2'>
              <Input
                defaultValue={user?.address}
                variant='outlined'
                label={capitalize(t('address'))}
                disabled={!isCUserProfile}
                placeholder=''
                icon={
                  <span className='material-symbols-outlined'>location_on</span>
                }
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className='flex justify-center w-full'>
            <Link to={`/home`}>
              <Button
                className='bg-primary w-full py-4'
                variant='filled'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t('save change'))}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

