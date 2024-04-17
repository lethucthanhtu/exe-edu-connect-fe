import { useParams } from 'react-router-dom';

/**
 * create course page
 * @returns JSX.Element
 */
export default function CreateCourse() {
    const { course_id } = useParams();

    return (
        <>
            <div className='flex justify-center'>
                <span className='text-6xl capitalize'>
                    create course {course_id}
                </span>
            </div>
        </>
    );
}
