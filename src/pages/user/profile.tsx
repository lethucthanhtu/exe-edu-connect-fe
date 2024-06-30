import { Button, Input, Typography } from '@material-tailwind/react';
// import { useRef, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import api from '../../api/api';
import { useEffect, useState } from 'react';
import { TUser } from '../../entity/user';
import { InputEmail } from '../../components/input';

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
        setFormData({
          username: usr.username,
          fullname: usr.fullname,
          dateofbirth: usr.dateofbirth,
          avatarurl:
            usr.avatarurl ||
            'https://t.vietgiaitri.com/2021/9/9/chia-se-len-fanpage-video-ghep-sieu-dinh-cua-fan-viet-thanh-nu-eimi-fukada-boi-roi-khi-bi-cdm-viet-doi-tri-an-cac-6052818.jpeg',
          email: usr.email,
          phone: usr.phone,
          address: usr.address,
          status: true,
          balance: 1,
          roleid: usr.authorities[0].authority === 'student' ? 1 : 2,
        });
      });
  }, [id]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    api
      .put(`/api/users/${id}`, formData)
      .then((res) => {
        setUser(res.data.returnData);
        alert(t('Profile updated successfully.'));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        alert(t('Failed to update profile!'));
      });
  };

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
            </div>
            <div className='col-span-2'>
              <Input
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
          </div>
          <hr className='my-2 border-blue-gray-50' />
          <div className='my-8 grid grid-cols-2 gap-8'>
            <div>
              <InputEmail
                name='email'
                value={formData?.email}
                onChange={handleChangeInput}
                disabled
                placeholder=''
                icon={<span className='material-symbols-outlined'>mail</span>}
              />
            </div>
            <div>
              <Input
                name='phone'
                value={formData?.phone}
                onChange={handleChangeInput}
                type='tel'
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
                name='address'
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
            </div>
          </div>
          <div className='flex justify-center w-full'>
            <Button
              onClick={handleSubmit}
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
        </div>
      </div>
    </>
  );
}
