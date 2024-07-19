import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { TCourse } from '../entity/entity/course';
import CourseDetailFooter from './coures.detail.footer';
import { CourseDetailBody } from './course.detail.body';
import { CourseCoverImage, CourseDetailHeader } from './course.detail.header';
import { capitalize, currencyFormat } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type TCourseDetailProps = {
  course: TCourse;
};

/** */
export default function CourseDetail({ course }: TCourseDetailProps) {
  const { t } = useTranslation();

  const handleClickCheckout = () => {
    // sessionStorage.setItem('teacherId', course.teachername);
    sessionStorage.setItem('teacherId', `${course.teacherid}`);
    sessionStorage.setItem('courseId', `${course.id}`);
  };
  return (
    <div className='relative py-5 '>
      {/* <CourseCoverImage /> */}
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full'>
        <div className='mx-2 md:basis-9/12'>
          <CourseDetailHeader course={course} />
        </div>
        <div className='md:basis-3/12 mb-4 md:mb-0'>
          <Card
            className='basis-1/4 flex justify-center items-start xs:'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardBody
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
                {currencyFormat(course.price || 0, 'đ', 0, false)}
              </Typography>
              {/* <Typography
              variant='paragraph'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >{`
              Enim commodo aute cillum sunt irure id ut.
              Eiusmod ipsum ex in irure deserunt esse aliqua minim deserunt ullamco.
              Aliquip elit elit ut dolor adipisicing. Veniam cupidatat veniam elit duis Lorem laborum ad ullamco non ex consequat ut Lorem.
            `}</Typography> */}
              <Link to={`/checkout`}>
                <Button
                  onClick={handleClickCheckout}
                  className='bg-primary w-full mt-4'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {capitalize(t(`checkout`))}
                </Button>
              </Link>
              <Typography
                variant='h5'
                className='flex flex-col mt-4 gap-2'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span className='flex justify-between'>
                  {capitalize(t(`start date`)) + ` :`}{' '}
                  <span className='font-normal'>{course.startdate}</span>
                </span>
                <span className='flex justify-between'>
                  {capitalize(t(`end date`)) + `: `}{' '}
                  <span className='font-normal'>{course.enddate}</span>
                </span>
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>

      <CourseDetailBody course={course} />
      <CourseDetailFooter course={course} />
    </div>
  );
}
