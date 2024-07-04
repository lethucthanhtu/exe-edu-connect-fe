import { useEffect, useState } from 'react';
import { TUser } from '../../../entity/user';
import api from '../../../api/api';
import { Card, Typography } from '@material-tailwind/react';
import { capitalize } from '../../../utils/utils';
import Separator from '../../../components/separator';
import { TTransaction } from '../../../entity/transaction';

const GET_CURR_USER_DATA_URL = `api/users/user`;

const TABLE_HEAD = [
  'student id',
  'course id',
  'course price',
  'message',
  'status',
  'check',
];

/**
 * dashboard page
 * @returns JSX.Element
 */
export default function Dashboard() {
  const [user, setUser] = useState<TUser>();
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    api.get(`/api/transactions`).then((res) => {
      const transData = res.data.returnData;
      setTransaction(transData);
    });
  }, []);

  return (
    <>
      <div className='w-full h-full flex flex-col'>
        <Typography
          className='mt-8 mx-auto'
          variant='h1'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize('Admin Dashboard')}
        </Typography>
        <Separator className='mt-4 mb-6' />
        <div className='mx-8'>
          <Card
            className='h-full w-full overflow-scroll'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <table className='w-full min-w-max table-auto text-left'>
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
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
                {transaction.map(
                  (
                    { courseid, userid, price, message, status, check },
                    index
                  ) => (
                    <tr key={courseid} className='even:bg-blue-gray-50/50'>
                      <td className='p-4'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {courseid}
                        </Typography>
                      </td>
                      <td className='p-4'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {userid}
                        </Typography>
                      </td>
                      <td className='p-4'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className='p-4'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {'default'}
                        </Typography>
                      </td>
                      <td className='p-4'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {'default'}
                        </Typography>
                      </td>
                      <td className='p-4'>
                        <Typography
                          as='a'
                          href='#'
                          variant='small'
                          color='blue-gray'
                          className='font-medium'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Click to confirm
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}
