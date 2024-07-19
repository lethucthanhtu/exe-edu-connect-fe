import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../api/api';

import Loading from '../../components/loading';
import CourseDetail from '../../components/course.detail';

/**
 * course page
 * @returns JSX.Element
 */
export default function Course() {
  const { id } = useParams();
  const [courseDetail, setCourseDetail] = useState<TCourseFullDetails>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/api/course/${id}`)
      .then((res) => {
        setCourseDetail(res.data.returnData);
        setLoading(false);
      })
      .finally(() => {
        const title =
          courseDetail.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D') || 'not-thing-found';
        navigate(`./${title}`);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='container flex justify-center '>
        {loading ? <Loading /> : <CourseDetail course={courseDetail} />}
      </div>
    </>
  );
}
