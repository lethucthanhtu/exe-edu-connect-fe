import { Avatar, Typography } from '@material-tailwind/react';
import { capitalize } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { TCourse } from '../entity/entity/course';


type TCourseHeaderProps = {
  course: TCourse;
};

/** */
export function CourseDetailHeader({ course }: TCourseHeaderProps) {
  const { t } = useTranslation();
  return (
    <div>
      <Typography
        className='text-5xl mb-4'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {course.name}
      </Typography>
      <div className='flex items-center gap-4 my-8'>
        <Avatar
          size='lg'
          variant='circular'
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          alt='tania andrew'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <div className='flex w-full flex-col gap-0.5'>
          <Typography
            variant='h4'
            color='blue-gray'
            className='capitalize'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {course.teachername}
          </Typography>
          <Typography
            variant='lead'
            color='blue-gray'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('teacher'))}
          </Typography>
        </div>
      </div>
    </div>
  );
}


/** */
export function CourseCoverImage() {
  return (
    <img
      src="https://via.placeholder.com/600x400"
      alt="Example"
      className="w-full h-auto"
    />
  )
}