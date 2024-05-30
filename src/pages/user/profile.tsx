import { Button, Input, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import { InputEmail } from '../../components/input';

/**
 * profile page
 * @returns JSX.Element
 */
export default function Profile() {
  // const [ck, setCK] = useState();
  const userRef = useRef(null);
  const { id } = useParams();
  const [Id, setId] = useState(localStorage.getItem('id') || id);
  const { t } = useTranslation();

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
            <div>
              <Input
                type=''
                variant='outlined'
                label={capitalize(t('last name'))}
                placeholder=''
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div>
              <Input
                variant='outlined'
                label={capitalize(t('first name'))}
                placeholder=''
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='date'
                variant='outlined'
                label={capitalize(t('day of birth'))}
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
                variant='outlined'
                label={capitalize(t('email'))}
                placeholder=''
                icon={<span className='material-symbols-outlined'>mail</span>}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <div>
              <Input
                variant='outlined'
                label={capitalize(t('phone number'))}
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
                variant='outlined'
                label={capitalize(t('address'))}
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
          <Link to={`/home`}>
            <div className='flex justify-center w-full'>
              <Button
                className='bg-primary w-1/6 py-3'
                variant='filled'
                size='sm'
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
    </>
  );
}
