import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { capitalize, numberFormat } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import { AvatarStack } from '../../components/avatarStack';
import subject_hero from '../../assets/img/subjects_hero.png';
import RatingStar from '../../components/ratingStar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';

type TSubjectCardProps = {
  img?: string;
  linkTo?: string;
  subject?: string;
  description?: string;
  numberOfCourses?: number;
};

/**
 *
 * @returns
 */
function SubjectCard({
  img = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  subject = 'unknown',
  linkTo,
  description = 'something something bla bla',
  numberOfCourses = 0,
}: TSubjectCardProps) {
  const { t } = useTranslation();
  return (
    <>
      <Card
        className='w-1/5 overflow-hidden'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='relative m-0 rounded-none'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <img src={img} />
        </CardHeader>
        <CardBody
          className='relative'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='w-full flex justify-center items-center'>
            <div className='z-50 absolute -top-[15%] bg-primary-light border border-primary rounded-full w-4/5 px-2 py-1 flex gap-4 justify-center items-center'>
              <AvatarStack numberOfAvatar={5} size='sm' />
              <Typography
                variant='paragraph'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span className='font-semibold'>
                  {`+ ${numberFormat(numberOfCourses)} `}
                </span>
                {capitalize(t('courses'))}
              </Typography>
            </div>
          </div>
          <Typography
            variant='h4'
            className='text-primary capitalize'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(subject))}
          </Typography>
          <Typography
            variant='lead'
            color='gray'
            className='mt-3 font-normal'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {`${capitalize(t(description))}`}
          </Typography>
        </CardBody>
        <CardFooter
          className='flex items-center justify-end'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Link to={`../${linkTo || subject}`}>
            <Button
              className='bg-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('join')}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

/**
 *
 * @returns
 */
export default function Subjects() {
  const { t } = useTranslation();
  const [subjects, setSubjects] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    api
      .get('/api/course/categories')
      .then((res) => setSubjects(res.data.returnData))
      .catch((err) => setErrMsg(err));
  }, []);

  return (
    <>
      <section id='hero' className='w-full flex justify-between items-center'>
        <div
          id='text-content'
          className='relative w-1/2 h-full flex justify-center items-center'
        >
          <div className='absolute translate-x-1/4 flex flex-col gap-4'>
            <Typography
              variant='h1'
              className=' text-primary text-7xl select-none'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(
                t('hãy tham gia các khóa học cùng gia sư của chúng tôi')
              )}
            </Typography>
            <div className='w-3/4 flex gap-4 justify-start items-center'>
              <Button
                className='bg-primary-sub'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t('tham gia ngay')}
              </Button>
              <div id='rating' className='flex gap-2'>
                <AvatarStack numberOfAvatar={3} />
                <Typography
                  variant='paragraph'
                  className='flex flex-col gap-0 justify-center items-start'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <RatingStar rate={4} color='primary-sub' />
                  <span>
                    {'('}
                    <span className='font-semibold'>
                      {`${numberFormat(1000)} `}
                    </span>
                    {`${t('người đánh giá')})`}
                  </span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div id='img-content' className='flex justify-end items-center'>
          <div className='relative overflow-hidden'>
            <span className='z-0 bottom-0 translate-x-1/2 absolute aspect-square w-2/4 rounded-full bg-primary-sub' />
            <img src={subject_hero} className='z-20 translate-x-10' />
            <div
              id='chart-icon'
              className='absolute right-[10%] top-1/3 flex gap-4 justify-center items-center rounded-2xl p-2 bg-primary-sub shadow-2xl'
            >
              <div
                id='equalizer-icon'
                className='bg-white aspect-square p-2 rounded-lg flex justify-center items-center'
              >
                <span className='material-symbols-outlined select-none text-primary-sub'>
                  equalizer
                </span>
              </div>
            </div>
            <div
              id='course-card'
              className='absolute right-[70%] bottom-12 flex gap-4 justify-center items-center rounded-2xl px-5 py-2 bg-primary-sub'
            >
              <div
                id='calendar_month-icon'
                className='bg-white aspect-square p-2 rounded-lg flex justify-center items-center'
              >
                <span className='material-symbols-outlined select-none text-primary-sub'>
                  calendar_month
                </span>
              </div>
              <Typography
                variant='h5'
                color='white'
                className='font-bold'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t('courses'))}
                <Typography
                  variant='paragraph'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  185+ {t('courses')}
                </Typography>
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section
        id='content'
        className='w-full pt-8 pb-4 bg-primary-light flex flex-col gap-4 justify-center items-center'
      >
        <Typography
          variant='h1'
          className='text-primary'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(t('main courses'))}
        </Typography>
        <div className='flex flex-wrap gap-x-2 gap-y-4 justify-center items-center'>
          {subjects ? (
            <Typography
              variant='paragraph'
              className='text-3xl'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span className='font-medium'>{capitalize(t('Oops!'))}</span>
              <span className='ml-2'>{capitalize(t('No courses found.'))}</span>
            </Typography>
          ) : (
            <>
              {subjects.map((subject) => (
                <SubjectCard
                  subject={subject.categoryname}
                  description={subject.description}
                  numberOfCourses={subject.totalCourses}
                />
              ))}
              {/* <Button
                variant='outlined'
                className='text-primary border-primary bg-white'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t('see more')}
              </Button> */}
            </>
          )}
        </div>
      </section>
    </>
  );
}
