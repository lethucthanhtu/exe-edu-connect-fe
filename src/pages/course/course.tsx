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

const data: TCourse = {
  id: Number(id),
  name: 'Quantum physic for kid',
  description: `Lorem sunt aliqua sunt quis enim cupidatat laborum dolor veniam cupidatat elit aliqua ad sit. Quis incididunt cillum ipsum reprehenderit sint. Consequat laborum tempor reprehenderit Lorem. Laborum ad in culpa laboris.
  Ut eu duis minim excepteur ullamco Lorem eu culpa eiusmod sint quis id sunt proident. Duis anim amet excepteur fugiat ut ullamco commodo minim aliqua do. Ad ea mollit dolore ad et quis minim mollit ullamco incididunt ad velit. Veniam eu Lorem est tempor labore aliquip dolor est duis esse cupidatat. Eu aliquip laboris nostrud voluptate pariatur nostrud. Excepteur esse occaecat fugiat reprehenderit consequat.

  Nisi Lorem irure nulla mollit do id officia duis. Amet irure exercitation aute nostrud proident magna tempor dolore in duis occaecat nostrud est. Culpa elit esse velit mollit nulla ut enim.

  Incididunt aliqua fugiat ea qui mollit exercitation labore pariatur culpa. Id nisi esse magna quis est exercitation aliqua eiusmod esse aliqua ipsum. Ex eiusmod irure tempor laboris aliquip quis dolore.

  Do qui minim proident sit elit pariatur veniam dolor deserunt dolor incididunt duis irure. Dolor incididunt ipsum labore enim eu. Reprehenderit veniam dolor elit cupidatat consequat ea aute aliquip. Exercitation consequat exercitation incididunt exercitation occaecat. Quis pariatur nulla non sint consequat officia.`,
  price: 1000,
  startdate: '2021-11-11',
  enddate: '2021-12-12',
  teachername: 'Le Thuc Thanh Tu',
  categoryname: 'Physic',
};


  const navigate = useNavigate();
  const [course, setCourse] = useState<TCourse>(data);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   api
  //     .get(`/api/course/${id}`)
  //     .then((res) => {
  //       setCourse(res.data.returnData);
  //       setLoading(false);
  //     })
  //     .catch(() => navigate('/error', { replace: true }));
  // }, [id, navigate]);

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
      <div className='container flex justify-center'>
        {
          // loading ? (
          // <Loading />
          // ) : course ?
          <CourseDetail course={course} />
          //       :
          //     (
          //   <div className='flex justify-center items-center h-screen'>
          //     <NotFound />
          //   </div>
          // )
        }
      </div>
    </>
  );
}
