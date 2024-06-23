import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { TCourse } from '../entity/entity/course';
import CourseDetailFooter from './coures.detail.footer';
import { CourseDetailBody } from './course.detail.body';
import { CourseDetailHeader } from './course.detail.header';
import { capitalize, currencyFormat } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type TCourseDetailProps = {
  course: TCourse;
};

/** */
export default function CourseDetail({ course }: TCourseDetailProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className='flex gap-4 justify-center items-start w-full mt-4'>
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
            <Typography
              variant='paragraph'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >{`
              Enim commodo aute cillum sunt irure id ut.
              Eiusmod ipsum ex in irure deserunt esse aliqua minim deserunt ullamco.
              Aliquip elit elit ut dolor adipisicing. Veniam cupidatat veniam elit duis Lorem laborum ad ullamco non ex consequat ut Lorem.
            `}</Typography>
            <Link to={`/checkout`}>
              <Button
                className='bg-primary w-full mt-4'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t(`checkout`))}
              </Button>
            </Link>
            <Typography
              variant='h6'
              className='flex flex-col mt-4 gap-2'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span className='flex justify-between'>
                {capitalize(t(`start date`))}{' '}
                <span className='font-normal'>{course.startdate}</span>
              </span>
              <span className='flex justify-between'>
                {capitalize(t(`end date`))}{' '}
                <span className='font-normal'>{course.enddate}</span>
              </span>
            </Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
