import { useEffect, useState } from 'react';
import { TUser } from '../../../entity/user';
import api from '../../../api/api';
import {
  Card,
  Chip,
  IconButton,
  Select,
  Option,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { capitalize } from '../../../utils/utils';
import Separator from '../../../components/separator';
import { TRANSACTION_URL } from '../../../utils/config';
import { ETransaction, TTransaction } from '../../../entity/entity/tranaction';
import { useTranslation } from 'react-i18next';
import Loading from '../../../components/loading';

const GET_CURR_USER_DATA_URL = `api/users/user`;

const TABLE_HEAD = [
  'student id',
  'course id',
  'course price',
  'message',
  'status',
  'edit',
];

// type TDisplayTransaction = {
//   message: string

// } & TTransaction

type TTableRowProps = {
  transaction: TTransaction;
};

/** */
function TableRow({ transaction }: TTableRowProps) {
  const [usr, setUsr] = useState<TUser>();
  const { t } = useTranslation();
  const [editToogle, setEditToogle] = useState(false);
  const [status, setStatus] = useState(transaction.status)
  // const getPayee = (id: string|number): string => {
  //     let u: TUser;
  //     api.get(`/api/users/${id}`).then(res => { u = res.data.returnData })
  //     return u.fullname;
  //   }

  useEffect(() => {
    api.get(`/api/users/${transaction.userid}`).then((res) => {
      setUsr(res.data.returnData);
    });
  }, []);


  const handleUpdateStatus = (event) => {
    setEditToogle(!editToogle);
    if (!editToogle) {
      api.put(TRANSACTION_URL + transaction.id + '/status', null, {
        params: {
          status: status
        }
})
    }
  };

  return (
    <>
      <tr key={transaction.courseid} className='even:bg-blue-gray-50/50'>
        <td className='p-4'>
          <Typography
            variant='small'
            color='blue-gray'
            className='font-normal'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {transaction.userid}
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
            {transaction.courseid}
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
            {transaction.price}
          </Typography>
        </td>
        <td className='p-4'>
          {!usr ? (
            <Loading className='size-1' />
          ) : (
            <Typography
              variant='small'
              color='blue-gray'
              className='font-normal'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {`${transaction.userid} - ${transaction.courseid} - ${usr.fullname}`}
            </Typography>
          )}
        </td>
        <td className='p-4'>
          {editToogle ? (
            <Select
              value={transaction.status}
              onChange={(e) =>
                setStatus(ETransaction[e as keyof typeof ETransaction])
              }
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {Object.values(ETransaction).map((val) => (
                <Option key={val} value={val}>
                  {val}
                </Option>
              ))}
            </Select>
          ) : (
            <Chip
              value={transaction.status}
              size='sm'
              color={
                transaction.status === ETransaction.PENDING
                  ? 'amber'
                  : transaction.status === ETransaction.FAILED
                  ? 'red'
                  : transaction.status === ETransaction.COMPLETED
                  ? 'green'
                  : 'gray'
              }
            />
          )}
        </td>
        <td className='p-4'>
          <Tooltip content='Edit Status'>
            <IconButton
              onClick={handleUpdateStatus}
              variant='text'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {editToogle ? (
                <span className='material-symbols-outlined'>check</span>
              ) : (
                <span className='material-symbols-outlined'>edit</span>
              )}
            </IconButton>
          </Tooltip>
        </td>
      </tr>
    </>
  );
}

/**
 * dashboard page
 * @returns JSX.Element
 */
export default function Dashboard() {
  const [user, setUser] = useState<TUser>();
  const [transactions, setTransactions] = useState<Array<TTransaction>>([]);

  useEffect(() => {
    api
      .get(TRANSACTION_URL)
      .then((res) => setTransactions(res.data.returnData));
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
            className='h-full w-auto overflow-scroll'
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
                {/* {transactions.map(({ courseid, userid, price }, index) => ( */}
                {transactions.map((transaction, index) => (
                  <TableRow transaction={transaction} />
                  // <tr key={courseid} className='even:bg-blue-gray-50/50'>
                  //   <td className='p-4'>
                  //     <Typography
                  //       variant='small'
                  //       color='blue-gray'
                  //       className='font-normal'
                  //       placeholder={undefined}
                  //       onPointerEnterCapture={undefined}
                  //       onPointerLeaveCapture={undefined}
                  //     >
                  //       {courseid}
                  //     </Typography>
                  //   </td>
                  //   <td className='p-4'>
                  //     <Typography
                  //       variant='small'
                  //       color='blue-gray'
                  //       className='font-normal'
                  //       placeholder={undefined}
                  //       onPointerEnterCapture={undefined}
                  //       onPointerLeaveCapture={undefined}
                  //     >
                  //       {userid}
                  //     </Typography>
                  //   </td>
                  //   <td className='p-4'>
                  //     <Typography
                  //       variant='small'
                  //       color='blue-gray'
                  //       className='font-normal'
                  //       placeholder={undefined}
                  //       onPointerEnterCapture={undefined}
                  //       onPointerLeaveCapture={undefined}
                  //     >
                  //       {price}
                  //     </Typography>
                  //   </td>
                  //   <td className='p-4'>
                  //     <Typography
                  //       variant='small'
                  //       color='blue-gray'
                  //       className='font-normal'
                  //       placeholder={undefined}
                  //       onPointerEnterCapture={undefined}
                  //       onPointerLeaveCapture={undefined}
                  //     >
                  //       {`${courseid} - ${userid} - ${getPayee(userid)}`}
                  //     </Typography>
                  //   </td>
                  //   <td className='p-4'>
                  //     <Typography
                  //       variant='small'
                  //       color='blue-gray'
                  //       className='font-normal'
                  //       placeholder={undefined}
                  //       onPointerEnterCapture={undefined}
                  //       onPointerLeaveCapture={undefined}
                  //     >
                  //       {'default'}
                  //     </Typography>
                  //   </td>
                  //   <td className='p-4'>
                  //     <Typography
                  //       as='a'
                  //       href='#'
                  //       variant='small'
                  //       color='blue-gray'
                  //       className='font-medium'
                  //       placeholder={undefined}
                  //       onPointerEnterCapture={undefined}
                  //       onPointerLeaveCapture={undefined}
                  //     >
                  //       Click to confirm
                  //     </Typography>
                  //   </td>
                  // </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}
