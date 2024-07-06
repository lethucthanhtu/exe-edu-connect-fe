import { Card, Typography } from '@material-tailwind/react';
import { capitalize } from '../utils/utils';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { useTranslation } from 'react-i18next';

type TTableProps = {
  tableHead: string[];
};

/**
 * table component
 * @returns JSX.Element
 */
export default function Table({ tableHead }: TTableProps) {
  const { t } = useTranslation();
  return (
    <>
      <Card
        className='h-full w-full overflow-scroll mt-4'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <table className='w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th
                  key={head}
                  className='cursor-pointer border-none bg-primary-sub p-4 transition-colors hover:bg-blue-gray-50'
                >
                  <Typography
                    variant='small'
                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70 !text-white text-base font-sans'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {capitalize(t(head))}{' '}
                    {/* <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' /> */}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {/* <tbody>
                        {TABLE_ROWS.map(({ name, job, date }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                            ? 'p-4'
                            : 'p-4 border-b border-blue-gray-50';

                            return (
                            <tr key={name}>
                                <td className={classes}>
                                <Typography
                                            variant='small'
                                            color='blue-gray'
                                            className='font-normal'
                                            placeholder={undefined}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}                        >
                                    {name}
                                </Typography>
                                </td>
                                <td className={classes}>
                                <Typography
                                            variant='small'
                                            color='blue-gray'
                                            className='font-normal'
                                            placeholder={undefined}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}                        >
                                    {job}
                                </Typography>
                                </td>
                                <td className={classes}>
                                <Typography
                                            variant='small'
                                            color='blue-gray'
                                            className='font-normal'
                                            placeholder={undefined}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}                        >
                                    {date}
                                </Typography>
                                </td>
                                <td className={classes}>
                                <Typography
                                            as='a'
                                            href='#'
                                            variant='small'
                                            color='blue-gray'
                                            className='font-medium'
                                            placeholder={undefined}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}                        >
                                    Edit
                                </Typography>
                                </td>
                            </tr>
                            );
                        })}
                        </tbody> */}
        </table>
      </Card>
    </>
  );
}
