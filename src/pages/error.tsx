import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <div className='min-h-screen flex flex-grow items-center justify-center bg-gray-50'>
                <Typography
                    className='rounded-lg bg-white p-8 text-center shadow-xl'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    <h1 className='mb-4 text-4xl font-bold'>404</h1>
                    <p className='text-gray-600'>
                        Oops! The page you are looking for could not be found.
                    </p>
                    <Link to='/'>
                        <Button
                            className='mt-4  px-4 py-2'
                            size='lg'
                            color='green'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            Go back to Home
                        </Button>
                    </Link>
                </Typography>
            </div>
        </>
    );
}
