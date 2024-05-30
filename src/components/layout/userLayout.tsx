import { useEffect, useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  CardHeader,
  CardBody,
  Avatar,
  Button,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, Outlet, useParams } from 'react-router-dom';
import { capitalize, currencyFormat } from '../../utils/utils';
import LanguageButton from '../languageButton';
import { useTranslation } from 'react-i18next';

type TUserProps = {
  img: string;
  name: string;
  role: 'student' | 'tutor' | 'staff' | 'admin';
  ballance?: number | string;
};

/** */
function User({ img, name, role, ballance = 0 }: TUserProps) {
  const { t } = useTranslation();
  try {
    ballance = Number(ballance);
  } catch (error) {
    ballance = 0;
  }
  return (
    <>
      <Card
        color='transparent'
        shadow={false}
        className='w-full'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          color='transparent'
          floated={false}
          shadow={false}
          className='mx-0 flex items-center gap-4 pt-0 pb-8'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='basis-2/5 aspect-square relative'>
            <Avatar
              size='xl'
              variant='circular'
              src={img}
              alt='tania andrew'
              className='!size-full'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Button
              // variant='text'
              className='!absolute !bottom-0 !right-0 size-[5%] rounded-full p-3 text-white bg-secondary-midBlue border-white border-2 flex justify-center items-center'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 absolute'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                />
              </svg>
            </Button>
          </div>
          <div className='flex basis-3/5 w-full flex-col gap-0.5'>
            <div className='flex items-center justify-between capitalize'>
              <Typography
                variant='h6'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {name}
              </Typography>
            </div>
            <Typography
              color='blue-gray'
              className='capitalize'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {role}
            </Typography>
          </div>
        </CardHeader>
        <CardBody
          className='mb-6 p-0 flex flex-col gap-2'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <LanguageButton />
        </CardBody>
      </Card>
    </>
  );
}

/** */
function UserSkeleton() {
  return (
    <>
      <Card
        color='transparent'
        shadow={false}
        className='w-full'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          color='transparent'
          floated={false}
          shadow={false}
          className='mx-0 flex items-center gap-4 pt-0 pb-8'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='basis-2/5 aspect-square relative'>
            <Avatar
              size='xl'
              variant='circular'
              src='https://st4.depositphotos.com/9998432/22670/v/450/depositphotos_226700594-stock-illustration-person-gray-photo-placeholder-man.jpg'
              alt='tania andrew'
              className='!size-full'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Button
              // variant='text'
              className='!absolute !bottom-0 !right-0 size-[5%] rounded-full p-3 text-white bg-secondary-midBlue border-white border-2 flex justify-center items-center'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 absolute'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                />
              </svg>
            </Button>
          </div>
          <div className='flex basis-3/5 w-full flex-col gap-4 animate-pulse'>
            <div className='flex items-center justify-between capitalize'>
              <Typography
                as='div'
                variant='h6'
                color='blue-gray'
                className='"mb-4 h-3 w-full rounded-full bg-gray-300'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                &nbsp;
              </Typography>
            </div>
            <Typography
              as='div'
              color='blue-gray'
              className='capitalize mb-2 h-2 w-1/2 rounded-full bg-gray-300'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              &nbsp;
            </Typography>
          </div>
        </CardHeader>
        <CardBody
          className='mb-6 p-0 flex flex-col gap-2'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant='paragraph'
            className='flex gap-2 items-center'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Ballance</span>
            <Chip
              value={`${currencyFormat(0)}`}
              className='w-full flex justify-center bg-primary'
            />
          </Typography>
          <div className='flex gap-2'>
            <Button
              variant='filled'
              size='sm'
              className='w-full bg-primary-sub'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Deposit
            </Button>
            <Button
              variant='outlined'
              size='sm'
              className='w-full border-primary-sub text-primary-sub'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Withdraw
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

/** */
function Sidebar({ img, name, role, ballance = 0 }: TUserProps) {
  const { t } = useTranslation();
  const id = localStorage.getItem('id');
  const [open, setOpen] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => {};
  // }, []);

  return (
    <Card
      className='min-h-full w-1/5 p-4 shadow-xl shadow-blue-gray-900/5'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className='mb-2 p-4 flex justify-center items-center'>
        {loading ? (
          <UserSkeleton />
        ) : (
          <User name={name} role={role} ballance={ballance} img={img} />
        )}
      </div>
      <hr className='mb-2 border-blue-gray-50' />
      <List
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link to={`${id}/profile`}>
          <ListItem
            className='hover:bg-primary-light'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span className='material-symbols-outlined'>account_circle</span>
            </ListItemPrefix>
            {capitalize(t('profile'))}
          </ListItem>
        </Link>
        <Link to={`${id}/schedule`}>
          <ListItem
            className='hover:bg-primary-light'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span className='material-symbols-outlined'>calendar_month</span>
            </ListItemPrefix>
            {capitalize(t('your schedule'))}
          </ListItem>
        </Link>
        <hr className='my-2 border-blue-gray-50' />
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? 'rotate-180' : ''
              }`}
            />
          }
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ListItem
            className='p-0'
            selected={open === 1}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className='border-b-0 p-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <ListItemPrefix
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <PresentationChartBarIcon className='size-5' />
              </ListItemPrefix>
              <Typography
                color='blue-gray'
                className='mr-auto font-normal'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                History
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className='py-1'>
            <List
              className='p-0'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Link to={`${id}/courses`}>
                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                  </ListItemPrefix>
                  Courses
                </ListItem>
              </Link>
              <Link to={`${id}/transactions`}>
                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                  </ListItemPrefix>
                  Transactions
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className='my-2 border-blue-gray-50' />
      </List>
      <List
        className='h-full flex flex-col justify-end'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link to={`${id}/resetpassword`}>
          <ListItem
            className='hover:bg-primary-light'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Cog6ToothIcon className='size-5' />
            </ListItemPrefix>
            {capitalize(t('change password'))}
          </ListItem>
        </Link>
        <ListItem
          className='hover:bg-primary-light'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ListItemPrefix
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <PowerIcon className='size-5' />
          </ListItemPrefix>
          {capitalize(t('log out'))}
        </ListItem>
      </List>
    </Card>
  );
}

/**
 * UserLayout Component
 * @returns
 */
export default function UserLayout() {
  return (
    <>
      <section className='flex size-full xs:flex-col md:!flex-row'>
        <Sidebar
          name='Lê Thúc Thanh Tú'
          role='admin'
          ballance='100000000'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpL7RVUm2ms3a2zwOqdvUnOAWbQNZtgAxe907htFFYEg&s'
        />
        <div className='size-full'>
          <Outlet />
        </div>
      </section>
    </>
  );
}
