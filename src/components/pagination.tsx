import { Button, IconButton, Typography }                 from '@material-tailwind/react';
import { Dispatch, SetStateAction, useEffect, useState }  from 'react';
import { Link, useSearchParams }                          from 'react-router-dom';
import { pathlify }                                       from '../utils/utils';

type TPaginationProps = {
  length: number;
  offset?: number;
  currentPage?: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  paginationPagesDisplay?: number;
  showPageInput?: boolean | 'true' | 'false';
  showNavigateText?: boolean | 'true' | 'false';
};

/**
 * pagination component
 * @returns JSX.Element
 */
export default function Pagination({
  length,
  offset = 25,
  currentPage = 1,
  setCurrentPage,
  paginationPagesDisplay = 10,
  showPageInput = true,
  showNavigateText = 'true',
}: TPaginationProps) {
  const [params] = useSearchParams();

  /**
   * total pages
   */
  const pages = Math.ceil(length / offset);
  if (currentPage > pages) setCurrentPage(1);

  /**
   * page number list
   */
  const pageNumbers = [...Array(pages).keys()];

  /**
   * selected page
   */
  const [active, setActive] = useState(currentPage <= pages ? currentPage : 1);

  // handle reset to 1st page when offset change
  useEffect(() => {
    setActive(currentPage <= pages ? currentPage : 1);
  }, [currentPage, pages]);

  const setPage = (newPage: number) => {
    setActive(newPage);
    setCurrentPage(newPage);
  };

  /**
   * check page input
   */
  const [isInputValid, setIsInputValid] = useState(true);
  const handleInputError = ({ target }) =>
    setIsInputValid(target.value <= pages);

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      const goToPage = Number(event.target.value) || 1;
      if (goToPage <= pages) setPage(goToPage);
    }
  };

  /**
   * pagination length
   */
  const pl = paginationPagesDisplay < 0 ? 10 : paginationPagesDisplay;

  /**
   * start to effect pagination
   * current active
   */
  const ca = pl / 2;

  const pageRangeStart =
    //start to effect after page ca
    pages >= pl && active > ca
      ? //check if at the end
        active + ca >= pages
        ? //get 1st page of end pagination
          pages - pl
        : // normal case
          active - ca
      : 0;

  const pageRangeEnd =
    //start to effect after page ca
    pages >= pl && active > ca
      ? //check if at the end
        active + ca >= pages
        ? //get last page of end pagination
          pages
        : // normal case
          active + ca
      : pl;

  /**
   * page props
   * @param index
   * @returns
   */
  const getItemProps = (index) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: 'green',
      onClick: () => {
        setPage(index);
      },
    } as any);

  const next = () => {
    if (active === pages) return;
    setPage(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setPage(active - 1);
  };

  return (
    <div className='flex items-center gap-4 select-none'>
      <Button
        variant='text'
        className='flex items-center gap-2'
        color='green'
        onClick={prev}
        disabled={active === 1}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <svg
          className='size-6 text-primary dark:text-white'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 12h14M5 12l4-4m-4 4 4 4'
          />
        </svg>
        {showNavigateText === 'true' && 'Previous'}
      </Button>
      <div className='flex items-center gap-2'>
        {pageNumbers.slice(pageRangeStart, pageRangeEnd).map((i) => (
          <Link
            key={i}
            to={pathlify('/search', {
              q: params.get('q'),
              p: i + 1,
              offset: params.get('offset') || offset,
            })}
          >
            <IconButton key={i} {...getItemProps(i + 1)}>
              {i + 1}
            </IconButton>
          </Link>
        ))}
        {pl === 0 && (
          <Typography
            color='green'
            className='font-normal'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Page <strong className='text-primary'>{active}</strong> of{' '}
            <strong className='text-primary'>{pages}</strong>
          </Typography>
        )}
        {pages > 10 && (
          <div
            className={`relative w-20 h-10 ${
              showPageInput === 'false' && 'hidden'
            } ${!isInputValid && 'animate-wiggle animate-infinite'}`}
          >
            <input
              id='paginationInput'
              type='number'
              className={`peer pr-9 w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                ${isInputValid ? 'text-blue-gray-700' : 'text-red-700'}
              `}
              onKeyDown={handleInputKeyDown}
              onInputCapture={handleInputError}
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Go to ...
            </label>
            <span className='absolute mr-1 inset-y-2 right-1 text-gray-400'>
              /{pages}
            </span>
          </div>
        )}
      </div>
      <Button
        variant='text'
        className='flex items-center gap-2'
        color='green'
        onClick={next}
        disabled={active === pages}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {showNavigateText === 'true' && 'Next'}
        <svg
          className='size-6 text-primary dark:text-white'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 12H5m14 0-4 4m4-4-4-4'
          />
        </svg>
      </Button>
    </div>
  );
}
