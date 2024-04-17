import { useState } from 'react';

import { Typography, Input, Button } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

/**
 * login page
 * @returns JSX.Element
 */
export default function Login() {
    const { t } = useTranslation();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    return (
        <section className='grid text-center h-screen items-center p-8'>
            <div>
                <Typography
                    variant='h3'
                    color='blue-gray'
                    className='mb-2 capitalize'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    {t('log in')}
                </Typography>
                <Typography
                    className='mb-16 text-gray-600 font-normal text-[18px]'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    Enter your email and password to sign in
                </Typography>
                <form action='#' className='mx-auto max-w-[24rem] text-left'>
                    <div className='mb-6'>
                        <label htmlFor='email'>
                            <Typography
                                variant='small'
                                className='mb-2 block font-medium text-gray-900'
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                Your Email
                            </Typography>
                        </label>
                        <Input
                            id='email'
                            color='gray'
                            size='lg'
                            type='email'
                            name='email'
                            placeholder='name@mail.com'
                            className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
                            labelProps={{
                                className: 'hidden',
                            }}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            crossOrigin={undefined}
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='password'>
                            <Typography
                                variant='small'
                                className='mb-2 block font-medium text-gray-900'
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                Password
                            </Typography>
                        </label>
                        <Input
                            size='lg'
                            placeholder='********'
                            labelProps={{
                                className: 'hidden',
                            }}
                            className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
                            type={passwordShown ? 'text' : 'password'}
                            // icon={
                            //     <i onClick={togglePasswordVisiblity}>
                            //         {passwordShown ? (
                            //             <svg
                            //                 className='size-5 text-gray-800 dark:text-white'
                            //                 aria-hidden='true'
                            //                 xmlns='http://www.w3.org/2000/svg'
                            //                 width='24'
                            //                 height='24'
                            //                 fill='none'
                            //                 viewBox='0 0 24 24'
                            //             >
                            //                 <path
                            //                     stroke='currentColor'
                            //                     stroke-width='2'
                            //                     d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'
                            //                 />
                            //                 <path
                            //                     stroke='currentColor'
                            //                     stroke-width='2'
                            //                     d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            //                 />
                            //             </svg>
                            //         ) : (
                            //             <svg
                            //                 className='size-5 text-gray-800 dark:text-white'
                            //                 aria-hidden='true'
                            //                 xmlns='http://www.w3.org/2000/svg'
                            //                 width='24'
                            //                 height='24'
                            //                 fill='none'
                            //                 viewBox='0 0 24 24'
                            //             >
                            //                 <path
                            //                     stroke='currentColor'
                            //                     stroke-linecap='round'
                            //                     stroke-linejoin='round'
                            //                     stroke-width='2'
                            //                     d='M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            //                 />
                            //             </svg>
                            //         )}
                            //     </i>
                            // }
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            crossOrigin={undefined}
                        />
                    </div>
                    <Button
                        color='gray'
                        size='lg'
                        className='mt-6'
                        fullWidth
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        sign in
                    </Button>
                    <div className='mt-4 flex justify-end'>
                        <Typography
                            as='a'
                            href='#'
                            color='blue-gray'
                            variant='small'
                            className='font-medium'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            <span>{t('Forgot password')}</span>
                        </Typography>
                    </div>
                    <Button
                        variant='outlined'
                        size='lg'
                        className='mt-6 flex h-12 items-center justify-center gap-2'
                        fullWidth
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        <img
                            src={`https://www.material-tailwind.com/logos/logo-google.png`}
                            alt='google'
                            className='h-6 w-6'
                        />
                        <span>sign in with google</span>
                    </Button>
                    <Typography
                        variant='small'
                        color='gray'
                        className='mt-4 text-center font-normal'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        Not registered?{' '}
                        <a href='#' className='font-medium text-gray-900'>
                            Create account
                        </a>
                    </Typography>
                </form>
            </div>
        </section>
    );
}
