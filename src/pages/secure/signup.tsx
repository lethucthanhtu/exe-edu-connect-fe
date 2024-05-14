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
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';

/** */
export function RoleRadioButton() {
  const { t } = useTranslation();
  return (
    <Card
      className='w-full'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <List
        className='flex-row'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <ListItem
          className='p-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <label
            htmlFor='horizontal-list-react'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix
              className='mr-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Radio
                name='horizontal-list'
                color='teal'
                id='horizontal-list-react'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </ListItemPrefix>
            <Typography
              color='blue-gray'
              className='font-medium text-blue-gray-400'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('tutor'))}
            </Typography>
          </label>
        </ListItem>
        <ListItem
          className='p-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <label
            htmlFor='horizontal-list-vue'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix
              className='mr-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Radio
                name='horizontal-list'
                color='teal'
                id='horizontal-list-vue'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </ListItemPrefix>
            <Typography
              color='blue-gray'
              className='font-medium text-blue-gray-400'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('student'))}
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

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
      {/* <form action='#'>
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
          <Input
          color='teal'
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
      </form> */}
      <form
        action='#'
        className='size-full flex flex-col gap-4 justify-center items-center'
      >
        <Typography
          variant='h3'
          color='teal'
          className='mb-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(t('register new account'))}
        </Typography>
        <div className='flex flex-col md:flex-row w-full justify-start items-center'>
          <Typography
            variant='paragraph'
            className='w-2/12 font-medium text-blue-gray-500'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('your role'))}
          </Typography>
          <RoleRadioButton />
        </div>
        <Input
          color='teal'
          type='text'
          label={capitalize(t('your name'))}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          color='teal'
          type='email'
          label='Email'
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          color='teal'
          type='password'
          label='Password'
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          color='teal'
          type='password'
          label='Re-enter Password'
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <div className='mt-4 flex flex-col gap-6 w-full'>
          <Button
            variant='filled'
            className='bg-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('sign up')}
          </Button>
          <Typography
            variant='paragraph'
            className='flex gap-1 w-full justify-center items-center'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {`${capitalize(t('have account'))}?`}
            <Link to='/login'>
              <Typography
                variant='paragraph'
                className='text-primary font-medium hover:underline underline-offset-2'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >{`${capitalize(t('sign in now'))}`}</Typography>
            </Link>
          </Typography>
        </div>
      </form>
    </>
  );
}
