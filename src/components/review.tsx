import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

type TRatingStarProps = {
  rate?: number;
};

/**
 * Rating Star
 * @returns
 */
function RatingStar({ rate = 0 }: TRatingStarProps) {
  rate = rate > 5 ? 0 : rate;
  const scale = Array(5 - rate).fill('');
  const rated = Array(rate).fill('');
  return (
    <>
      {rated.map(() => (
        <svg
          className='size-4 text-yellow-500'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 22 20'
        >
          <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
        </svg>
      ))}
      {scale.map(() => (
        <svg
          className='w-4 h-4 text-gray-300 dark:text-gray-500'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 22 20'
        >
          <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
        </svg>
      ))}
    </>
  );
}

/**
 * Review/ Comment Component
 * @returns
 */
export default function Review() {
  return (
    <>
      <article>
        <div className='flex items-center mb-4'>
          <img
            className='size-10 me-4 rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpL7RVUm2ms3a2zwOqdvUnOAWbQNZtgAxe907htFFYEg&s'
            alt=''
          />
          <div className='font-medium dark:text-white'>
            <p>
              Jese Leos
              <time
                dateTime='2014-08-16 19:00'
                className='block text-sm text-gray-500 dark:text-gray-400'
              >
                Joined on August 2014
              </time>
            </p>
          </div>
        </div>
        <div className='flex items-center mb-1 space-x-1 rtl:space-x-reverse'>
          <RatingStar rate={4} />

          <h3 className='ms-2 text-sm font-semibold text-gray-900 dark:text-white'>
            Thinking to buy another one!
          </h3>
        </div>
        <footer className='mb-5 text-sm text-gray-500 dark:text-gray-400'>
          <p>
            Reviewed in the United Kingdom on{' '}
            <time dateTime='2017-03-03 19:00'>March 3, 2017</time>
          </p>
        </footer>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>
          This is my third Invicta Pro Diver. They are just fantastic value for
          money. This one arrived yesterday and the first thing I did was set
          the time, popped on an identical strap from another Invicta and went
          in the shower with it to test the waterproofing.... No problems.
        </p>
        <p className='mb-3 text-gray-500 dark:text-gray-400'>
          It is obviously not the same build quality as those very expensive
          watches. But that is like comparing a Citroën to a Ferrari. This watch
          was well under £100! An absolute bargain.
        </p>
        <Link
          to='#'
          className='block mb-5 text-sm font-medium text-green-600 hover:underline dark:text-green-500'
        >
          <Button
            variant='text'
            color='green'
            className='normal-case'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Read more
          </Button>
        </Link>
        <aside>
          <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>
            19 people found this helpful
          </p>
          <div className='flex items-center mt-3'>
            <Link
              to='#'
              className='text-xs font-medium'
            >
              <Button
                variant='text'
                color='green'
                className='normal-case'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Helpful
              </Button>
            </Link>
            <Link
              to='#'
              className='ps-4 text-sm font-medium text-green-600 hover:underline dark:text-green-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600'
            >
              <Button
                variant='text'
                color='green'
                className='normal-case'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Report abuse
              </Button>
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}
