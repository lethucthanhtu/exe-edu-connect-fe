import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Chip,
  Typography,
} from '@material-tailwind/react';

import { useTranslation } from 'react-i18next';

import { capitalize, numberFormat } from '../utils/utils';

import ft1 from '../assets/img/home/feature_tutor_1.png';
import ft2 from '../assets/img/home/feature_tutor_2.png';
import h1 from '../assets/img/home/home_1.jpg';
import h2 from '../assets/img/home/home_2.jpg';
import h3 from '../assets/img/home/home_3.jpg';
import h4 from '../assets/img/home/home_4.jpg';
import h5 from '../assets/img/home/home_5.jpg';
import h6 from '../assets/img/home/home_6.jpg';
import h7 from '../assets/img/home/home_7.jpg';
import sf1 from '../assets/img/home/self_learning_1.jpg';
import sf2 from '../assets/img/home/self_learning_2.jpg';
import ol1 from '../assets/img/home/online_learning_1.jpg';
import ol2 from '../assets/img/home/online_learning_2.jpg';
import ol3 from '../assets/img/home/online_learning_3.jpg';
import oc from '../assets/img/home/offline_class.jpg';
import grade from '../assets/img/home/grade.jpg';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// const imgs = require.context('../assets/img/home')

/** */
function HomeCarousel() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [displayImg, setDisplayImg] = useState(0);

  const imgs = [h1, h2, h3, h4, h5, h6, h7];
  const viewAllCourses = () => {
    navigate('/course/all');
  };
  const goToSignupPage = () => {
    navigate('/signup');
  };

  useEffect(() => {
    const handleInterval = () =>
      setDisplayImg(displayImg < imgs.length - 1 ? displayImg + 1 : 0);

    const sec = 5;
    const intervalId = setInterval(handleInterval, sec * 1000);

    return () => clearInterval(intervalId);
  }, [displayImg, setDisplayImg, imgs.length]);

  return (
    <section className='h-full'>
      <div className='relative flex h-full justify-center overflow-hidden'>
        <Carousel
          className='rounded-xl lg:hidden'
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
          // transition={{ type: 'tween', delay: 2 }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {imgs.map((img) => (
            <img
              src={img}
              alt='image 1'
              className='aspect-video object-cover'
            />
          ))}
        </Carousel>
        <img
          src={imgs[displayImg]}
          className='w-screen aspect-video hidden bg-opacity-60 lg:block object-cover rounded-xl'
        />

        <div
          id='hero-text'
          className='absolute container hidden lg:flex w-full flex-col gap-4 justify-center mt-24 
          bg-black bg-opacity-55 px-8 py-4 rounded-xl'
        >
          <Typography
            variant='h1'
            color='white'
            className='text-[300%] uppercase w-full'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('are you looking for an online tutor?'))}
            <Typography
              variant='paragraph'
              className='mt-2 normal-case'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(
                t(
                  `Online tutoring is an effective and convenient learning method, bringing many benefits to students in the digital age. Online tutoring is emerging as an effective and convenient learning solution in the digital age. This form brings many outstanding advantages compared to traditional learning methods, meeting the diverse learning needs of students of all ages and levels.`
                )
              ,false)}
            </Typography>
          </Typography>
          <div className='inline-flex gap-4'>
            <Button
              className='bg-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={viewAllCourses}
            >
              {capitalize(t('see more courses'))}
            </Button>
            <Button
              color='white'
              className='text-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={goToSignupPage}
            >
              {capitalize(t('sign up'))}
            </Button>
          </div>
        </div>
        <div className='absolute bottom-[5%] w-full hidden lg:inline-flex gap-8 flex-nowrap peer'>
          <ul
            className='flex items-center justify-center gap-8 [&_img]:max-w-none animate-infinite-scroll peer-hover:animate-none'
            // aria-hidden='false'
          >
            {imgs.map((img, index) => (
              <li>
                <Button
                  variant='text'
                  className='p-0'
                  onClick={() => setDisplayImg(index)}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <img
                    src={img}
                    className='aspect-video w-48 object-cover rounded-xl'
                  />
                </Button>
              </li>
            ))}
          </ul>
          <ul
            className='flex items-center justify-center gap-8 [&_img]:max-w-none animate-infinite-scroll peer-hover:animate-none'
            aria-hidden='true'
          >
            {imgs.map((img, index) => (
              <li>
                <Button
                  variant='text'
                  className='p-0'
                  onClick={() => setDisplayImg(index)}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <img
                    src={img}
                    className='aspect-video w-48 object-cover rounded-xl'
                  />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** */
function FeatureTutorCard({ user = {}, isReverse = false }) {
  const { t } = useTranslation();
  const items = [
    { icon: 'school', num: 200, text: 'students' },
    { icon: 'star', num: 4.5, text: 'points' },
    { icon: 'play_circle', num: 8, text: 'courses' },
    { icon: 'rate_review', num: 100, text: 'review' },
  ];
  return (
    <div
      className={`flex justify-center items-stretch
                  ${isReverse && 'flex-row-reverse'}`}
    >
      <div className={`w-1/3 flex flex-col`}>
        <div
          id='img-content'
          className='relative flex justify-center items-center'
        >
          <span className='z-0 absolute bottom-[2.5%] aspect-square w-4/5 rounded-full bg-primary-sub' />
          <img src={ft1} className='z-10' />
          <span className='w-full rounded-2xl bg-primary-medium grid grid-cols-2' />
        </div>
        <div className='grid grid-cols-2 py-8 px-8 gap-4 bg-primary-light rounded-xl'>
          {items.map((item) => (
            <div className='flex gap-2 justify-start items-center h-full'>
              <span className='material-symbols-outlined'>{item.icon}</span>
              <Typography
                variant='paragraph'
                className='flex justify-center items-center'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span className='font-medium mr-1'>
                  {`${+numberFormat(item.num, 0)}+`}
                </span>
                {t(item.text)}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className='w-2/3 flex-col gap-6 justify-center mt-16'>
        <div id='name-section'>
          <Typography
            variant='h3'
            className='capitalize'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {/* {t(user.fullname)} */} Lê Thúc Thanh Tú
            <span className='material-symbols-outlined text-primary select-none ml-2'>
              verified
            </span>
          </Typography>
          <Typography
            variant='paragraph'
            className='text-lg '
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(
              t(`Bachelor in English studies, PhD in Linguistics`),
              false
            )}
          </Typography>
        </div>
        <Typography
          variant='paragraph'
          className='mt-6'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen bookLorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen bookLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book`}
        </Typography>
        <Link to='/' className=' inline-flex justify-end w-full pr-4'>
          <Button
            variant='text'
            className='text-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('see more'))}
          </Button>
        </Link>
      </div>
    </div>
  );
}

/** */
function StudentActivityCard() {
  const { t } = useTranslation();
  return (
    <>
      <Card
        className='bg-primary-light'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          className='flex flex-col gap-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='flex gap-2'>
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
                variant='h5'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Tania Andrew
              </Typography>
              <div className='5 flex items-center gap-0'></div>
              <Typography
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Frontend Lead @ Google
              </Typography>
            </div>
          </div>
          <img src={grade} className='aspect-video w-full rounded-lg' />
          <Typography
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('something something'))}
          </Typography>
        </CardBody>

        <CardFooter
          className='flex gap-2'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Chip value={capitalize(t('mathematics'))} className='bg-primary' />
        </CardFooter>
      </Card>
    </>
  );
}

/** */
function SectionWithTitle({
  id = '',
  className = '',
  title,
  subTitle,
  children,
}) {
  const { t } = useTranslation();
  return (
    <>
      <section
        id={id}
        className={`container mt-12 flex flex-col justify-center items-center ${className}`}
      >
        <div className='mb-6'>
          <Typography
            variant='h1'
            className='text-primary text-center'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(title))}
          </Typography>
          <Typography
            variant='paragraph'
            className='text-center'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(subTitle))}
          </Typography>
        </div>
        {children}
      </section>
    </>
  );
}

/**
 * home page
 * @returns JSX.Element
 */
export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HomeCarousel />
      <section
        id='content'
        className='container flex flex-col justify-center items-center'
      >
        <SectionWithTitle
          id='trending-course'
          title='trending course'
          subTitle='discover our trending courses that suit your needs'
          children={undefined}
        />
        <section id='feature-tutor' className='w-full flex flex-col gap-6'>
          <div
            id='separator'
            className='w-1/2 flex justify-start items-center gap-2'
          >
            <hr className='w-12 border-[1px] border-primary rounded-full' />
            <Typography
              variant='h6'
              className='text-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('outstanding tutors'))}
            </Typography>
          </div>
          <div className='flex flex-col gap-4'>
            {[...Array(2).keys()].map((index) => (
              <>
                {index % 2 === 0 ? (
                  <FeatureTutorCard />
                ) : (
                  <FeatureTutorCard isReverse={true} />
                )}
              </>
            ))}
          </div>
          <Link to='/tutor/all' className='inline-flex w-full justify-center'>
            <Button
              className='bg-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('see more tutors'))}
            </Button>
          </Link>
        </section>
        <section id='ad' className='container flex gap-4 mt-12'>
          <div className='basis-1/2 flex gap-2 items-center'>
            <div className='basis-4/6'>
              <img src={oc} className='h-full aspect-square rounded-lg' />
            </div>
            <div className='basis-2/6 flex flex-col gap-2 justify-between'>
              <img src={sf1} className='aspect-square basis-1/2 rounded-lg' />
              <img src={sf2} className='aspect-square basis-1/2 rounded-lg' />
            </div>
          </div>
          <div className='basis-1/2 flex flex-col gap-4 justify-center items-start'>
            <hr className='w-1/5 border-4 border-primary-sub' />
            <Typography
              variant='h1'
              className='text-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('student quality is guaranteed'))}
            </Typography>
            <Typography
              variant='paragraph'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(
                t(
                  `The quality of students participating in the course will be guaranteed in a reputable way. Commitment that after participating in courses, students will achieve better learning results.`
                ),
                false
              )}
            </Typography>
            <Button
              variant='text'
              className='text-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('see more'))}
            </Button>
          </div>
        </section>
        <SectionWithTitle
          id='student-activity'
          title='student activities'
          subTitle='join our dynamic community to stay up to date with news and opportunities'
        >
          <div className='grid grid-cols-2 gap-4'>
            <StudentActivityCard />
            <StudentActivityCard />
            <StudentActivityCard />
            <StudentActivityCard />
          </div>
        </SectionWithTitle>
        <SectionWithTitle
          id='student-rating'
          title={`student's reviews`}
          subTitle='find out what our students have to say about their learning experience'
        >
          <div className='grid grid-cols-3'></div>
        </SectionWithTitle>
      </section>
      <section id='post-rating'></section>
    </>
  );
}
