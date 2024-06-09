import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../api/api';

import NotFound from '../error/notFound';
import Loading from '../../components/loading';
import CourseDetail from '../../components/course.detail';

/**
 * course page
 * @returns JSX.Element
 */
export default function Course() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get(`/api/course/${id}`).then((res) => {
      setCourse(res.data.returnData);
      setLoading(false);
    });
    // .catch(() => navigate('/error', { replace: true }));
  }, [id, navigate]);

  //self-healing url
  useEffect(() => {
    const title =
      course?.name
        ?.toLowerCase()
        .replace(/\s+/g, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D') || '';

    navigate(`./${title}`, { replace: true });
  }, [course, navigate]);

  return (
    <>
      <div className='flex justify-center'>
        {loading ? (
          <Loading />
        ) : course ? (
          <CourseDetail course={course} />
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <NotFound />
          </div>
        )}
      </div>
    </>
  );
}
