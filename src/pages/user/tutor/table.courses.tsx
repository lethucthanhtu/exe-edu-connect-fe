import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { t } from 'i18next';
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  PencilIcon,
} from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { clear } from 'console';
import api from '../../../api/api';
import { capitalize } from '../../../utils/utils';

const TABLE_HEAD = ['Transaction', 'Amount', 'Date', 'Status', ''];

const TABLE_ROWS = [
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    name: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    name: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-pinterest.svg',
    name: 'Pinterest',
    amount: '$3,400',
    date: 'Mon 7:40pm',
    status: 'pending',
    account: 'master-card',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-google.svg',
    name: 'Google',
    amount: '$1,000',
    date: 'Wed 5:00pm',
    status: 'paid',
    account: 'visa',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-netflix.svg',
    name: 'netflix',
    amount: '$14,000',
    date: 'Wed 3:30am',
    status: 'cancelled',
    account: 'visa',
    accountNumber: '1234',
    expiry: '06/2026',
  },
];

/**
 * Schedule Component
 */
export default function CourseTable() {
  const { t } = useTranslation();

  // const { id } = useParams();

  useEffect(() => {
    console.clear();
    api.get(`/api/course-schedules/student/22`).then((res) => console.log(res));
  }, []);

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
      <div className='container'>
        <Card
          className='w-auto mx-6'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardHeader
            floated={false}
            shadow={false}
            className='rounded-none'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className='mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center'>
              <Typography
                variant='h5'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t(`your course`))}
              </Typography>
            </div>
          </CardHeader>
          <CardBody
            className='px-0 overflow-x-scroll'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <table className='w-full table-auto text-left'>
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'
                    >
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal leading-none opacity-70'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, amount, date, status }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className='flex items-center gap-3'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-bold'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className='w-max'>
                          <Chip
                            size='sm'
                            variant='ghost'
                            value={status}
                            color={
                              status === 'paid'
                                ? 'green'
                                : status === 'pending'
                                ? 'amber'
                                : 'red'
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content='Edit User'>
                          <IconButton
                            variant='text'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            <span className='material-symbols-outlined'>
                              edit
                            </span>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
          <CardFooter
            className='flex items-center justify-between border-t border-blue-gray-50 p-4'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Button
              variant='outlined'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Previous
            </Button>
            <div className='flex items-center gap-2'>
              <IconButton
                variant='outlined'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                1
              </IconButton>
              <IconButton
                variant='text'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                2
              </IconButton>
              <IconButton
                variant='text'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                3
              </IconButton>
              <IconButton
                variant='text'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                ...
              </IconButton>
              <IconButton
                variant='text'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                8
              </IconButton>
              <IconButton
                variant='text'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                9
              </IconButton>
              <IconButton
                variant='text'
                size='sm'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                10
              </IconButton>
            </div>
            <Button
              variant='outlined'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Next
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
