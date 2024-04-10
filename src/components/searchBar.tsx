import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../utils/utils';
import { Input, IconButton } from '@material-tailwind/react';
import { Form, useSearchParams } from 'react-router-dom';

export function SearchBar() {
    const [params] = useSearchParams();
    const [query, setQuery] = React.useState(params.get('q') || '');
    const { t } = useTranslation();
    const searchBarRef = useRef(null);
    const handleChange = ({ target }) => setQuery(target.value);
    const handleClear = () => {
        setQuery('');
        searchBarRef.current!.focus();
    };
    
    //handle focus search bar
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (
                event.key === '/' &&
                !searchBarRef.current!.contains(document.activeElement)
            ) {
                event.preventDefault();
                searchBarRef.current!.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [searchBarRef]);

    return (
        <>
            <Form
                method='get'
                action='/search'
                className='relative flex max-w-[24rem]'
            >
                <Input
                    type='text'
                    label={capitalize(t('search'))}
                    name='q'
                    value={query}
                    onChange={handleChange}
                    className='pr-20'
                    inputRef={searchBarRef}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                // containerProps={{
                //     className: 'min-w-0',
                // }}
                // icon={
                //     query && (
                //         <IconButton
                //             size='sm'
                //             variant='text'
                //             onClick={handleClear}
                //             className='!absolute right-8 inset-y-1 rounded'
                //         >
                //             <span className='material-symbols-outlined size-8'>
                //                 close
                //             </span>
                //         </IconButton>
                //     )
                // }
                />
                <div className='flex justify-between !absolute right-1 inset-y-1 '>
                    {query ? (
                        <IconButton
                            size='sm'
                            variant='text'
                            onClick={handleClear}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            <svg
                                className='size-4 text-gray-500 dark:text-white'
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
                                    d='M6 18 17.94 6M18 18 6.06 6'
                                />
                            </svg>
                        </IconButton>
                    ) : (
                        <code className='bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-white border border-gray-300 px-[2px] my-1 mr-1 rounded-sm select-none'>
                            /
                        </code>
                    )}

                    <IconButton
                        type='submit'
                        size='sm'
                        variant='text'
                        color={query ? 'green' : 'blue-gray'}
                        disabled={!query}
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        <svg
                            className='size-4'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 20'
                        >
                            <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                            />
                        </svg>
                        {/* {t('search')} */}
                    </IconButton>
                </div>
            </Form>
        </>
    );
}
