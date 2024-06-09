import { Card, CardHeader, Typography } from '@material-tailwind/react';
import { TCourse } from '../entity/entity/course';
import CourseDetailFooter from './coures.detail.footer';
import { CourseDetailBody } from './course.detail.body';
import { CourseDetailHeader } from './course.detail.header';
import { currencyFormat } from '../utils/utils';

type TCourseDetailProps = {
  course: TCourse;
};

/** */
export default function CourseDetail({ course }: TCourseDetailProps) {
  return (
    <>
      <div className='flex gap-4 justify-center w-full border border-red-500'>
        <div className='basis-3/4'>
          <CourseDetailHeader course={course} />
          <CourseDetailBody course={course} />
          <CourseDetailFooter course={course} />
        </div>
        <Card
          className='basis-1/4 flex justify-center items-start'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardHeader
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              variant='h1'
              className='text-3xl'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {currencyFormat(course.price, 'đ', 0, false)}
            </Typography>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
