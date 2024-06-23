import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURR_USER_DATA_URL } from '../utils/config';
import api from '../api/api';
import Loading from '../components/loading';

/** */
export default function MyProfile() {
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    token
      ? api.get(CURR_USER_DATA_URL).then((res) => {
          const usr = res.data?.returnData;
          navigate(`/user/${usr.id}`, { replace: true });
        })
      : navigate('/login', { replace: true });
  }, [navigate, token]);

  return (
    <div className='size-full flex justify-center items-center'>
      <Loading />
    </div>
  );
}
