import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data.json';

/**
 * course page
 * @returns JSX.Element
 */
export default function Course() {
    const { course_id } = useParams();
    const navigate = useNavigate();
    const [course, setCourseData] = useState(null);

    //self-healing url
    useEffect(() => {
        const c = data.find((item) => item.id === course_id);
        const title = c?.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
        setCourseData({ title });
        return navigate(title ? `./${title}` : '../../error');
    }, [course_id]);

    return (
        <>
            <div className='flex justify-center'>
                {course ? (
                    <span className='text-6xl capitalize'>
                        Course {course_id}
                    </span>
                ) : (
                    <span>loading</span>
                )}
            </div>
        </>
    );
}
