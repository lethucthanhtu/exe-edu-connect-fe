import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../api/api';

import NotFound from '../error/notFound';
import Loading from '../../components/loading';
import CourseDetail from '../../components/course.detail';
import { TCourse } from '../../entity/entity/course';



/**
 * course page
 * @returns JSX.Element
 */
export default function Course() {
  const { id } = useParams();
  const getCourseByIdUrl = `/api/course/${id}`;
  const [courseDetail, setCourseDetail] = useState<TCourseFullDetails>()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetchCourseById()
  }, [])

  const fetchCourseById = () => {
    api
      .get(
        getCourseByIdUrl)
      .then((res) => {
        setCourseDetail(res.data.returnData)
        setLoading(false);
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Current error:', error);
        setLoading(false);
      });
  }


  return (
    <>
      <div className='container flex justify-center'>
        {
          loading ? (
            <Loading />
          ) : (
            <CourseDetail course={courseDetail} />
            //       :
            //     (
            //   <div className='flex justify-center items-center h-screen'>
            //     <NotFound />
            //   </div>
            // )
          )}
      </div>
    </>
  );
}
