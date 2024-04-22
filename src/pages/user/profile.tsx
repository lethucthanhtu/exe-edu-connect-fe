import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * profile page
 * @returns JSX.Element
 */
export default function Profile() {
  // const [ck, setCK] = useState();
  const { id } = useParams();

  return (
    <>
      <div className='flex justify-center'>
        <span className='text-6xl capitalize'>Profile {id}</span>
      </div>
    </>
  );
}
