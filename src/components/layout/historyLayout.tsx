import { Typography } from '@material-tailwind/react';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import Table from '../table';

type THistoryLayoutProps = {
  title: string;
  tableHead: string[];
};

/**
 * History Layout
 * @returns JSX.Element
 */
export default function HistoryLayout({...props }: THistoryLayoutProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className='flex justify-center w-full'>
        <div className='w-10/12 flex flex-col '>
          <Typography
            id='alo'
            className='pt-8 '
            variant='h5'
            color='blue-gray'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(props.title))}
          </Typography>
          <hr className='my-2 border-blue-gray-50' />
          <Table tableHead={props.tableHead} />
        </div>
      </div>
    </>
  );
}
