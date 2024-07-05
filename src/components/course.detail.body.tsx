import { useTranslation } from 'react-i18next';
import { TCourse } from '../entity/entity/course';
import { capitalize } from '../utils/utils';
import { Typography } from '@material-tailwind/react';

type TCourseDetailBodyProps = {
  course: TCourse;
};

/** */
export function CourseDetailBody({ course }: TCourseDetailBodyProps) {
  const { t } = useTranslation();
  return (
    <>
      <Typography
        variant='h3'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {capitalize(t(`about the course`))}
        {/* <img className='border rounded-lg aspect-video w-full' src='https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png' /> */}

        <Typography
          variant='lead'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(t(course.description))}
        </Typography>
      </Typography>
    </>
  );
}
