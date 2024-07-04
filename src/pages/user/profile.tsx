import { Button, Input, Typography } from '@material-tailwind/react';
// import { useRef, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import api from '../../api/api';
import { ChangeEvent, useEffect, useState } from 'react';
import { TUser } from '../../entity/user';
import { InputEmail } from '../../components/input';
import { AlertPopup } from '../../components/alert';
import { IDOL_IMG } from '../../utils/config';
import Separator from '../../components/separator';

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
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    dateofbirth: '',
    avatarurl: '',
    email: '',
    phone: '',
    address: '',
    status: true,
    balance: 0,
    roleid: 1,
  });

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/api/users/${id}`)
      .then((res) => {
        const usr = res.data.returnData;
        setUser(usr);
        return usr;
      })
      .then((usr) => {
        const { name, value } = usr;
        //         setFormData({...prev,
        // [name]: value}
        // )

        setFormData({
          username: usr.username,
          fullname: usr.fullname,
          dateofbirth: usr.dateofbirth,
          avatarurl: usr.avatarurl || IDOL_IMG,
          email: usr.email,
          phone: usr.phone,
          address: usr.address,
          status: true,
          balance: 1,
          roleid: usr.role[0].id,
        });
      });
  }, [id]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');
    setErrMsg('');
    api
      .put(`/api/users/${id}`, formData)
      .then((res) => {
        setUser(res.data.returnData);
        setMessage('Profile updated successfully.');
      })
      .then(() => {
        setTimeout(() => {
          location.reload();
        }, 4000);
      })
      .catch(() => setErrMsg('Failed to update profile!'));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);

    // api.put
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex justify-center w-full'>
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
          <Separator className='mt-4 mb-6' />
          <div className='flex gap-8'>
            <Input
              className='basis-1/2'
              color='teal'
              name='fullname'
              value={formData?.fullname}
              onChange={handleChangeInput}
              variant='outlined'
              label={capitalize(t('full name'))}
              disabled={!isCUserProfile}
              placeholder=''
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Input
              className='basis-1/2'
              color='teal'
              name='dateofbirth'
              value={formData?.dateofbirth}
              onChange={handleChangeInput}
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
          <Separator className='mt-4 mb-6' />
          <div className='flex gap-8 mb-6'>
            <InputEmail
              className='basis-1/2'
              name='email'
              value={formData?.email}
              onChange={handleChangeInput}
              readOnly={isCUserProfile}
              disabled={!isCUserProfile}
              icon={<span className='material-symbols-outlined'>mail</span>}
            />
            <Input
              className='basis-1/2'
              name='phone'
              color='teal'
              value={formData?.phone}
              onChange={handleChangeInput}
              type='tel'
              variant='outlined'
              label={capitalize(t('phone number'))}
              disabled={!isCUserProfile}
              icon={
                <span className='material-symbols-outlined'>phone_iphone</span>
              }
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
          <Input
            color='teal'
            name='address'
            className=''
            value={formData?.address}
            onChange={handleChangeInput}
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
          <Separator className='mt-4 mb-6' />

          <Input
            label={capitalize(t(`profile picture`))}
            onChange={handleFileChange}
            type='file'
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />

          {isCUserProfile && (
            <div className='flex justify-center w-full mt-6'>
              <Button
                // onClick={handleSubmit}
                type='submit'
                className='bg-primary w-2/12 py-4'
                variant='filled'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t('save change'))}
              </Button>
            </div>
          )}
        </div>
      </form>
      {message && <AlertPopup color='green'>{message}</AlertPopup>}
      {errMsg && <AlertPopup>{errMsg}</AlertPopup>}
    </>
  );
}
