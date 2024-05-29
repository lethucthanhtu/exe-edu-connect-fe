import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../courses.data.json';
import { Spinner } from '@material-tailwind/react';
import NotFound from '../error/notFound';

/**
 * course page
 * @returns JSX.Element
 */
export default function Course() {
  const { course_id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  //self-healing url
  useEffect(() => {
    setLoading(true);

    const c = data.find((item) => item.id === course_id);
    const title =
      c?.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D') || 'not-thing-found';

    setCourse(c);

    navigate(`./${title}`, {replace:true});

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [course_id, navigate]);

  return (
    <>
      <div className='flex justify-center'>
        {loading ? (
          <Spinner
            color='green'
            className='size-12'
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        ) : course ? (
          <span className='text-6xl capitalize'>Course {course_id}</span>
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <NotFound />
          </div>
        )}
      </div>
    </>
  );
}
