import { useParams } from 'react-router-dom';

/**
 * edit course page
 * @returns JSX.Element
 */
export default function EditCourse() {
    const { course_id } = useParams();

    return (
        <>
            <div className='flex justify-center'>
                <span className='text-6xl capitalize'>
                    Edit Course {course_id}
                </span>
            </div>
        </>
    );
}
