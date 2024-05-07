import { Link } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
  Typography,
} from '@material-tailwind/react';
import Review from '../../components/review';

type TSubjectCardProps = {
  img: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'expert';
  title: string;
  goto?: string;
  description: string;
};

// const subjects: TSubjectCardProps[] = [
//   { title: 'math'  , img:'',  description: 'math description' },
//   { title: 'physic', img:'',  description: 'physic description' },
// ];


/**
 * Subject Card
 * @returns Component
 */
function SubjectCard({
  img,
  duration,
  level,
  title,
  description,
  goto
}: TSubjectCardProps) {
  return (
    <>
      <Card
        className='w-full pt-9 bg-gray-100 border border-gray-400'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          // color='blue-gray'
          className='relative lg:min-h-44 xl:max-h-96 rounded-3xl'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <img src={img} alt='card-image' />
        </CardHeader>
        <CardBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            className='flex justify-start gap-2'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Chip
              size='sm'
              variant='outlined'
              color='blue-gray'
              className='lowercase font-normal'
              value={duration}
            />
            <Chip
              size='sm'
              variant='outlined'
              color='blue-gray'
              className='capitalize font-normal'
              value={level}
            />
          </Typography>
          <Typography
            variant='h5'
            color='blue-gray'
            className='my-2'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {title}
          </Typography>
          <Typography
            className='line-clamp-6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter
          className='pt-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Link to={goto}>
            <Button
              variant='outlined'
              color='blue-gray'
              className='w-full normal-case'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Read More
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

type TSectionProps = {
  title: string;
  children: ReactNode;
  goto: string;
  className?: string;
};

/** Section component */
function CourseSection({ title, children, goto, className }: TSectionProps) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <div className={className}>
      <Typography
        variant='h2'
        className='font-medium mb-2'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {title}
      </Typography>
      <div className='flex justify-between w-full'>
        <Typography
          variant='paragraph'
          className='w-3/4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <span className={`${!show && 'line-clamp-5'}`}>{children}</span>
          <Button
            variant='text'
            className='underline normal-case font-normal'
            onClick={handleShow}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {show ? 'see less' : 'see more'}
          </Button>
        </Typography>
        <Link to={goto} className='flex justify-center items-center'>
          <Button
            className='w-full normal-case'
            color='green'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Xem thêm
          </Button>
        </Link>
      </div>
    </div>
  );
}

/**
 * courses page
 * @returns JSX.Element
 */
export default function Courses() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <CourseSection title='Khóa học' goto='#' className='mb-6 mt-4'>
        In velit minim qui laboris veniam aute sunt exercitation eiusmod.
        Nostrud fugiat velit exercitation sunt nulla laboris tempor officia et
        veniam dolor. Id ipsum cupidatat exercitation qui. Anim duis eiusmod ut
        nostrud. Nisi fugiat Lorem nisi nisi incididunt mollit irure pariatur
        deserunt exercitation Lorem dolore. Ad nostrud in irure consectetur.
        Nostrud fugiat velit exercitation sunt nulla laboris tempor officia et
        veniam dolor. Id ipsum
      </CourseSection>
      <section className='grid grid-cols-2 gap-4 justify-between mb-4'>
        <SubjectCard
          img={''}
          duration={''}
          level={'beginner'}
          title={''}
          description={''}
        />
        <SubjectCard
          img={''}
          duration={''}
          level={'beginner'}
          title={''}
          description={''}
        />
        <SubjectCard
          img={''}
          duration={''}
          level={'beginner'}
          title={''}
          description={''}
        />
        <SubjectCard
          img={''}
          duration={''}
          level={'beginner'}
          title={''}
          description={''}
        />
        <SubjectCard
          img={''}
          duration={''}
          level={'beginner'}
          title={''}
          description={''}
        />
        <SubjectCard
          img={''}
          duration={''}
          level={'beginner'}
          title={''}
          description={''}
        />
      </section>
      <CourseSection
        title='Đánh giá của chúng tôi'
        goto='#'
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
    </>
  );
}
