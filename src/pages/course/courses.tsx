import { useParams, useSearchParams } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@material-tailwind/react';

import Review from '../../components/review';
import CourseCard from '../../components/course.card';

import { capitalize } from '../../utils/utils';
import api from '../../api/api';
import { TCourse } from '../../entity/entity/course';
import Loading from '../../components/loading';
import { COURSES_URL } from '../../utils/config';
import { AlertPopup } from '../../components/alert';

type TSectionProps = {
  title: string;
  children?: ReactNode;
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
        {capitalize(t(title) || 'all courses')}
      </Typography>
      {/* <Typography
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
      </Typography> */}
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

  const [placeholderText, setPlaceholderText] = useState('');
  const [courses, setCourses] = useState<Array<TCourse>>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  //for subject/{subject}/courses page
  useEffect(() => {
    setLoading(true);
    api
      .get(COURSES_URL, {
        params: {
          category: capitalize(subject) || '',
          page: page,
          size: size,
        },
      })
      .then((res) => {
        setCourses(res.data.returnData.coursedtos);
      })
      .catch((err) => setErrMsg(err.message))
      .finally(() => setLoading(false));
  }, [subject, page, size]);

  //for subject category placeholder text
  useEffect(() => {
    api
      .get(`api/course/category/${capitalize(subject)}`)
      .then((res) => setPlaceholderText(res.data.returnData.description))
      .catch((err) => setErrMsg(err.message));
  }, [subject, page, size]);

  return (
    <section className='container w-full'>
      <CourseSection title={subject} className='mb-6 mt-4'>
        {subject
          ? placeholderText
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
        {!loading ? (
          courses?.map((course) => <CourseCard course={course} />)
        ) : (
          <Loading middle />
        )}
      </section>
      <CourseSection title='Đánh giá của chúng tôi' className='mb-6 mt-6'>
        {`${capitalize(t(``))}`}
      </CourseSection>
      <div className='grid grid-cols-2 gap-4 gap-y-8 mb-6'>
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      {errMsg && <AlertPopup>{errMsg}</AlertPopup>}
    </section>
  );
}
