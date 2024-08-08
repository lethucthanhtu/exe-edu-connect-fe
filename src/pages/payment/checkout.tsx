import { size } from '@material-tailwind/react/types/components/avatar';
import {
  CheckoutWarningNotification,
  CheckoutDetails,
  PaymentOptions,
  QRSection,
} from '../../components/checkout_child_components';
import { TUser } from '../../entity/user';
import api from '../../api/api';
import { useEffect, useState } from 'react';
import { TCourse } from '../../entity/entity/course';

/**
 * Contains the details of the course to be checked out.
 * @returns JSX.Element
 */

/**
 * checkout page
 * @returns JSX.Element
 */
export default function Checkout() {
  const [teacher, setTeacher] = useState<TUser>();
  const [course, setCourse] = useState<TCourse>();

  useEffect(() => {
    const teacherId = sessionStorage.getItem('teacherId');
    const courseId = sessionStorage.getItem('courseId');

    api.get(`/api/users/${teacherId}`).then((res) => {
      setTeacher(res.data.returnData);
    });
    api.get(`/api/course/${courseId}`).then((res) => {
      setCourse(res.data.returnData);
    });
  }, []);

  return (
    <>
      <div className='container my-5 hidden md:block'>
        <CheckoutWarningNotification />
      </div>
      <div className='container flex justify-center items-center mx-4'>
        <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-8 w-full'>
          <div className='md:basis-1/2'>
            {teacher && <CheckoutDetails teacher={teacher} course={course} />}
          </div>
          <div className='md:basis-1/2'>
            <PaymentOptions />
            <QRSection course={course} />
          </div>
        </div>
      </div>
    </>
  );
}
