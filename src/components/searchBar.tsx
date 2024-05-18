import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../utils/utils';
import { Input, IconButton } from '@material-tailwind/react';
import { Form, useSearchParams } from 'react-router-dom';

/**
 * search bar component
 * @returns JSX.Element
 */
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
      const activeElement = document.activeElement;
      const searchBar = searchBarRef.current;
      if (
        event.key === '/' &&
        activeElement.tagName !== 'INPUT' &&
        !searchBar!.contains(activeElement)
      ) {
        event.preventDefault();
        searchBar!.focus();
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
        reloadDocument={window.location.pathname === '/search'}
        className='relative md:flex max-w-[24rem] hidden'
      >
        <Input
          type='text'
          label={capitalize(t('search'))}
          name='q'
          color='teal'
          value={query}
          className='pr-20'
          onFocus={(event) => {
            event.target.select();
          }}
          onKeyDownCapture={(event) =>
            event.key === 'Escape' && event.currentTarget.blur()
          }
          onChange={handleChange}
          inputRef={searchBarRef}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </IconButton>
        </div>
      </Form>
    </>
  );
}
