import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import api from '../../api/api';
import { capitalize } from '../../utils/utils';
import axios from 'axios';
import { Button, Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

/**
 *
 */
function CourseCard({
  title = 'title',
  buttonText = 'click',
  buttonLink = '#',
  description = '',
}) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='flex flex-col gap-4 justify-between items-start'>
        <Typography variant='h5' className=''>
          {capitalize(t(title))}
        </Typography>
        <div>
          <Typography variant='paragraph'>
            {capitalize(t(description))}
          </Typography>
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
        </div>
      </div>
      <Link to={buttonLink} className='flex justify-center items-end'>
        <Button className='bg-primary'>{buttonText}</Button>
      </Link>
    </section>
  );
}

/**
 *
 * @returns
 */
export default function CourseInSubject() {
  const { subject_name } = useParams();
  const [params] = useSearchParams();
  const page = params.get('page');
  const size = params.get('size');
  const [courses, setCourses] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    api
      .get('/api/courses', {
        params: {
          category: capitalize(subject_name),
          page: page,
          size: size,
        },
      })
      .then((res) => setCourses(res.data.returnData))
      .catch((err) => setErrMsg(err.message));

    return () => {};
  }, [subject_name, page, size]);

  return (
    <>
      <section id='title' className='w-3/4 flex justify-center items-center'>
        <CourseCard title='' />
      </section>
      <section
        id='courses'
        className='w-3/4 flex justify-center items-center'
      ></section>
      <section
        id='rating'
        className='w-3/4 flex justify-center items-center'
      ></section>
    </>
  );
}
