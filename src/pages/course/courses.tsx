import { useParams, useSearchParams } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@material-tailwind/react';

import Review from '../../components/review';
import CourseCard from '../../components/course.card';

import { capitalize } from '../../utils/utils';
import api from '../../api/api';

type TSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

/** Section component */
function CourseSection({ title, children, className }: TSectionProps) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const { t } = useTranslation();
  return (
    <div className={className}>
      <Typography
        variant='h2'
        className='font-medium mb-2 capitalize'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {capitalize(t(title))}
      </Typography>
      <Typography
        variant='paragraph'
        className='w-3/4'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <span className=''>
          <span className={`${!show && 'line-clamp-3'}`}>{children}</span>
          {children.toString().length > 100 && (
            <button
              className='underline ml-4 hover:text-primary'
              onClick={handleShow}
            >
              {t(show ? 'see less' : 'see more')}
            </button>
          )}
        </span>
      </Typography>
    </div>
  );
}

/**
 * courses page
 * @returns JSX.Element
 */
export default function Courses() {
  const { t } = useTranslation();

  const { subject } = useParams();

  const [params] = useSearchParams();
  const [page, setPage] = useState(params.get('page') || 1);
  const [size, setSize] = useState(params.get('size') || 25);

  const [courses, setCourses] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errMsg, setErrMsg] = useState('');

  //for subject/{subject}/courses page
  useEffect(() => {
    api
      .get('/api/courses', {
        params: {
          category: capitalize(subject),
          page: page,
          size: size,
        },
      })
      .then((res) => setCourses(res.data.returnData.courseDtos))
      .catch((err) => setErrMsg(err.message));
  }, [subject, page, size]);

  return (
    <section className='container w-full'>
      <CourseSection title={subject || 'courses'} className='mb-6 mt-4'>
        {subject
          ? 'subject description placeholder'
          : capitalize(
              t(`In velit minim qui laboris veniam aute sunt exercitation eiusmod.
        Nostrud fugiat velit exercitation sunt nulla laboris tempor officia et
        veniam dolor. Id ipsum cupidatat exercitation qui. Anim duis eiusmod ut
        nostrud. Nisi fugiat Lorem nisi nisi incididunt mollit irure pariatur
        deserunt exercitation Lorem dolore. Ad nostrud in irure consectetur.
        Nostrud fugiat velit exercitation sunt nulla laboris tempor officia et
        veniam dolor. Id ipsum`)
            )}
      </CourseSection>
      <section className='flex flex-wrap gap-x-2 gap-y-4 justify-evenly my-12'>
        {courses.map((course) => (
          <CourseCard
            id={course.id}
            name={course.name}
            price={course.price}
            description={course.description}
            startDate={course.startdate}
            endDate={course.enddate}
            subject={course.categoryname}
          />
        ))}
      </section>
      <CourseSection title='Đánh giá của chúng tôi' className='mb-6 mt-6'>
        {`${capitalize(
          t(` Aute voluptate elit veniam velit consectetur fugiat cupidatat et sunt
        reprehenderit occaecat Lorem eu. Dolor laborum culpa quis commodo labore
        proident labore tempor mollit. Sint tempor ut incididunt nisi sunt. Aute
        voluptate elit veniam velit consectetur fugiat cupidatat et sunt
        reprehenderit occaecat Lorem eu. Dolor laborum culpa quis commodo labore
        proident labore tempor mollit. Sint tempor ut incididunt nisi sunt. Aute
        voluptate elit veniam velit consectetur fugiat cupidatat`)
        )}`}
      </CourseSection>
      <div className='grid grid-cols-2 gap-4 gap-y-8 mb-6'>
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
}
