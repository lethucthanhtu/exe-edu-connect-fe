import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from '@material-tailwind/react';

import Review from '../../components/review';
import { useTranslation } from 'react-i18next';
import {
  capitalize,
  currencyFormat,
  getWeeksBetweenDates,
  numberFormat,
} from '../../utils/utils';
import api from '../../api/api';

type TSectionProps = {
  title: string;
  children: ReactNode;
  linkTo: string;
  className?: string;
};

/** Section component */
function CourseSection({ title, children, linkTo, className }: TSectionProps) {
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
        <span>
          <span className={`${!show && 'line-clamp-3'}`}>{children}</span>
          <button
            className='underline ml-4 hover:text-primary'
            onClick={handleShow}
          >
            {t(show ? 'see less' : 'see more')}
          </button>
        </span>
      </Typography>
    </div>
  );
}

type TCourseCardProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  startDate: string;
  endDate: string;
};

/** */
function CourseCard({
  id,
  name = 'courses',
  price,
  description,
  startDate,
  endDate,
}: TCourseCardProps) {
  const { t } = useTranslation();
  const [isFav, setIsFav] = useState(false);
  return (
    <Link to={`../${id || `#`}`} className='w-[30%] '>
      <Card
        className='shadow-lg'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          floated={false}
          color='blue-gray'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <img
            src='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='ui/ux review check'
          />
          <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ' />
          <IconButton
            size='sm'
            color={isFav ? 'red' : 'white'}
            variant='text'
            className='!absolute top-4 right-4 rounded-full'
            onClick={() => setIsFav(!isFav)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-6 w-6'
            >
              <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
            </svg>
          </IconButton>
        </CardHeader>
        <CardBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='mb-3 flex items-center justify-between'>
            <Typography
              variant='h5'
              color='blue-gray'
              className='font-medium'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t(name))}
            </Typography>
            <Typography
              color='blue-gray'
              className='flex items-center gap-1.5 font-normal'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='-mt-0.5 h-5 w-5 text-yellow-700'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              5.0
            </Typography>
          </div>
          <Typography
            color='gray'
            className='line-clamp-4'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(description))}
          </Typography>
          <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
            <Chip
              variant='ghost'
              value={`${getWeeksBetweenDates(startDate, endDate)} ${t(
                'weeks'
              )}`}
            />
          </div>
          <Typography
            variant='h6'
            className='text-3xl flex justify-end'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {currencyFormat(price, 'VNĐ', 2, false)}
          </Typography>
        </CardBody>
        <CardFooter
          className='pt-3'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Link to={`../${id || '#'}/register`}>
            <Button
              size='lg'
              fullWidth={true}
              className='bg-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('register now')}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Link>
  );
}

/**
 * courses page
 * @returns JSX.Element
 */
export default function Courses() {
  const { subject_name } = useParams();
  const [params] = useSearchParams();
  const page = params.get('page');
  const size = params.get('size');
  const [courses, setCourses] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  //for subject/{subject_name}/courses page
  useEffect(() => {
    api
      .get('/api/courses', {
        params: {
          category: capitalize(subject_name),
          page: page,
          size: size,
        },
      })
      .then((res) => setCourses(res.data.returnData.courseDtos))
      .catch((err) => setErrMsg(err.message));
  }, [subject_name, page, size]);

  return (
    <section className='container w-full'>
      <CourseSection
        title={subject_name || 'courses'}
        linkTo='#'
        className='mb-6 mt-4'
      >
        In velit minim qui laboris veniam aute sunt exercitation eiusmod.
        Nostrud fugiat velit exercitation sunt nulla laboris tempor officia et
        veniam dolor. Id ipsum cupidatat exercitation qui. Anim duis eiusmod ut
        nostrud. Nisi fugiat Lorem nisi nisi incididunt mollit irure pariatur
        deserunt exercitation Lorem dolore. Ad nostrud in irure consectetur.
        Nostrud fugiat velit exercitation sunt nulla laboris tempor officia et
        veniam dolor. Id ipsum
      </CourseSection>
      <section className='flex flex-wrap gap-x-2 gap-y-4 justify-evenly'>
        {courses.map((course) => (
          <CourseCard
            id={course.id}
            name={course.name}
            price={course.price}
            description={course.description}
            startDate={course.startdate}
            endDate={course.enddate}
          />
        ))}

      </section>
      <CourseSection
        title='Đánh giá của chúng tôi'
        linkTo='#'
        className='mb-6 mt-6'
      >
        Aute voluptate elit veniam velit consectetur fugiat cupidatat et sunt
        reprehenderit occaecat Lorem eu. Dolor laborum culpa quis commodo labore
        proident labore tempor mollit. Sint tempor ut incididunt nisi sunt. Aute
        voluptate elit veniam velit consectetur fugiat cupidatat et sunt
        reprehenderit occaecat Lorem eu. Dolor laborum culpa quis commodo labore
        proident labore tempor mollit. Sint tempor ut incididunt nisi sunt. Aute
        voluptate elit veniam velit consectetur fugiat cupidatat
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
