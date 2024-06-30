import { Textarea, Typography } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import DatePicker from '../../components/datePicker';

/**
 * create course page
 * @returns JSX.Element
 */
export default function CreateCourse() {
  // const { id } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <div className='flex justify-center'>
        <Typography
          variant='h1'
          className=''
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(t('create course'))}
        </Typography>
        <hr className='w-2/5 text-gray-600 bg-gray-600 h-2' />
        <span className='flex justify-between'>
          <Textarea
            required
            name='name'
            label={capitalize(t(`course name`))}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <span>upload img</span>
        </span>
        <Textarea
          required
          className='w-full'
          name='description'
          label={capitalize(t(`course description`))}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <span className='flex justify-between'>
          <DatePicker label='start date'/>
          <DatePicker label='end date'/>
        </span>
      </div>
    </>
  );
}
