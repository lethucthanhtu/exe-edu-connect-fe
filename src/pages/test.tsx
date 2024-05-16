import { useEffect } from 'react';
import { api, apiLocal, apiProd, apiTest } from '../api/api';
import { Typography } from '@material-tailwind/react';

// eslint-disable-next-line no-console
console.clear();

/** */
export default function Test() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const localAPI = () => {
    apiLocal
      .get('/roles')
      // eslint-disable-next-line no-console
      .then((res) => console.log(res))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const prodAPI = () => {
    apiProd
      .get('/hello')
      // eslint-disable-next-line no-console
      .then((res) => console.log(res))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const publicAPI = () => {
    apiTest
      .get('/thong-tin-co-phieu/danh-sach-ma-chung-khoan', {
        params: {
          loaidn: 1,
          san: 'HOSE',
        },
      })
      // eslint-disable-next-line no-console
      .then((res) => console.log(res))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    localAPI();
    // prodAPI();
    // publicAPI();
  }, []);

  return (
    <>
      <div className='relative overflow-hidden size-full gap-2 md:gap-8 flex flex-col justify-center items-center select-none animate-fade-down'>
        <Typography
          variant='h1'
          color='teal'
          className='z-10 md:text-9xl gap-4 md:gap-8 flex justify-center items-center'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          F12
          <span className='flex gap-1'>
            <span className='font-normal bg-gradient-to-r from-primary-medium/75 to-danger bg-clip-text text-transparent animate-infinite animate-pulse'>
              please
            </span>
            <span className='text-danger/75'>!</span>
          </span>
        </Typography>
        <Typography
          variant='h5'
          className='z-10 md:text-4xl font-light flex gap-2.5'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Or
          <span className='font-normal'>'Inspect'</span>
        </Typography>
        <span className='z-0 absolute aspect-square rounded-full h-2/5 md:h-3/4 shadow-2xl animate-infinite animate-ping' />
      </div>
    </>
  );
}
