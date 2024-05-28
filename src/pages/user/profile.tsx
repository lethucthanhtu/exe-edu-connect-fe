import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * profile page
 * @returns JSX.Element
 */
export default function Profile() {
  // const [ck, setCK] = useState();
  const { id } = useParams();
  const [Id, setId] = useState(localStorage.getItem('id') || id);

  return (
    <>
      <div className='flex justify-center'>
        <span className='flex justify-center items-center text-xs capitalize'>
          <span className='material-symbols-outlined'>search</span>
          123
        </span>
      </div>
    </>
  );
}
