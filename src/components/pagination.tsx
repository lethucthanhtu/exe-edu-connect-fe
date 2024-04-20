import { Button, IconButton } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

/**
 * pagination component
 * @returns JSX.Element
 */
export function Pagination({ length, offset, currentPage, setCurrentPage }) {
    const pages = Math.ceil(length / offset);
    const [active, setActive] = useState(
        currentPage <= pages ? currentPage : 1
    );
    const [isInputValid, setIsInputValid] = useState(true);

    const handleInputError = ({ target }) =>
        setIsInputValid(target.value <= pages);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const goToPage = Number(event.target.value);
            if (goToPage && goToPage <= pages) {
                setActive(goToPage);
                setCurrentPage(goToPage);
            }
        }
    };

    // handle reset to 1st page when offset change
    useEffect(() => {
        if (currentPage <= pages) setActive(currentPage);
        else setActive(1);
    }, [currentPage, pages]);

    const x = 5; //start to effect pagination
    const pl = 2 * x; //pagination length
    const pageRangeStart =
        //start to effect after page 5
        pages >= 10 && active > x
            ? //check if at the end
              active + x >= pages
                ? //get 1st page of end pagination
                  pages - pl
                : // normal case
                  active - x
            : 0;

    const pageRangeEnd =
        //start to effect after page x
        pages >= 10 && active > x
            ? //check if at the end
              active + x >= pages
                ? //get last page of end pagination
                  pages
                : // normal case
                  active + x
            : pl;

    const pageNumbers = [...Array(pages).keys()];

    const getItemProps = (index) =>
        ({
            variant: active === index ? 'filled' : 'text',
            color: 'green',
            onClick: () => {
                setActive(index);
                setCurrentPage(index);
            },
        } as any);

    const next = () => {
        if (active === pages) return;
        setActive(active + 1);
        setCurrentPage(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
        setCurrentPage(active - 1);
    };

    return (
        <div className='flex items-center gap-4'>
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
                Previous
            </Button>
            <div className='flex items-center gap-2'>
                {pageNumbers.slice(pageRangeStart, pageRangeEnd).map((i) => (
                    <IconButton key={i} {...getItemProps(i + 1)}>
                        {i + 1}
                    </IconButton>
                ))}
                {pages > 10 && (
                    <div className={`relative w-20 h-10 ${!isInputValid && 'animate-wiggle animate-infinite'}`}>
                        <input
                            id='paginationInput'
                            type='number'
                            className={`peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                                isInputValid
                                    ? 'text-blue-gray-700'
                                    : 'text-red-700'
                            } `}
                            // placeholder={
                            //     isFocus ? ' '.repeat(8) + '/' + pages : ''
                            // }
                            onKeyDown={handleKeyDown}
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
                Next
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
