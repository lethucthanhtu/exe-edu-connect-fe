import { useState } from 'react';
import {
  Typography,
  Input,
  Button,
  MenuHandler,
  MenuItem,
  MenuList,
  Menu,
  Select,
  Option,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LoginLayout from '../../components/layout/loginLayout';

/**
 * sign up page
 * @returns JSX.Element
 */
export default function Signup() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <form action='#'>
        <div className='mb-6'>
          <Typography
            variant='h3'
            color='white'
            className='mb-2 flex justify-center capitalize'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('register new account')}
          </Typography>
        </div>

        <div className='flex flex-col gap-4'>
          <Select
            className='bg-secondary-darkBlue '
            label={`${t('tutor/student')}`}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Option className='capitalize'>{`${t('tutor')}`}</Option>
            <Option className='capitalize'>{`${t('student')}`}</Option>
          </Select>

          {/* <Menu>
              <MenuHandler className='flex items-center justify-between'>
                <MenuItem
                  className='capitalize'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t('tutor/student')}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? 'rotate-90' : ''
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList
                className='w-4/12 h-auto '
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <MenuItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t('tutor')}
                </MenuItem>
                <MenuItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {t('student')}
                </MenuItem>
              </MenuList>
            </Menu> */}
          <Input
            id='email'
            color='gray'
            size='lg'
            type='email'
            name='email'
            placeholder={`${t('Email')}...`}
            className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
            labelProps={{
              className: 'hidden',
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Input
            id='username'
            color='gray'
            size='lg'
            type='text'
            name='username'
            placeholder={`${t('your name')}...`}
            className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
            labelProps={{
              className: 'hidden',
            }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Input
            size='lg'
            placeholder={`${t('password')}...`}
            labelProps={{
              className: 'hidden ',
            }}
            className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
            type={passwordShown ? 'text' : 'password'}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <Input
            size='lg'
            placeholder={`${t('repassword')}...`}
            labelProps={{
              className: 'hidden ',
            }}
            className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
            type={passwordShown ? 'text' : 'password'}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div className='flex flex-col justify-center mt-10'>
          <Link to={'123'}>
            <Button
              className='w-full text-gray-400 bg-secondary-midBlue'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('sign up')}
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
}
