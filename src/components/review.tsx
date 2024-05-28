import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import RatingStar from './ratingStar';

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
