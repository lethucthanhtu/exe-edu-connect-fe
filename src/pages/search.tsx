import { useTranslation } from 'react-i18next';
import { Link, useSearchParams } from 'react-router-dom';
import { Pagination } from '../components/pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Input,
    Option,
    Select,
    Spinner,
    Typography,
} from '@material-tailwind/react';

/**
 *
 */
function SearchResultCard({ code, fullname_vi, loaidn, san }) {
    return (
        <Card
            className='min-w-10 min-h-8'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
        >
            <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            >
                {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='mb-4 h-12 w-12 text-gray-900'
                >
                    <path
                        fillRule='evenodd'
                        d='M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
                        clipRule='evenodd'
                    />
                    <path d='M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z' />
                </svg> */}
                <Typography
                    variant='h5'
                    color='blue-gray'
                    className='mb-2'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    {fullname_vi}
                </Typography>
                <Typography
                    variant='h3'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    {code}
                </Typography>
                <Typography
                    variant='h4'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    <span>sàn: {san}</span>
                    <br />
                    <span>loại doanh nghiệp: {loaidn}</span>
                </Typography>
            </CardBody>
            {/* <CardFooter
                className='pt-0'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            >
                <Link to='#' className='inline-block'>
                    <Button
                        size='sm'
                        variant='text'
                        className='flex items-center gap-2'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        Learn More
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-4 w-4'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                            />
                        </svg>
                    </Button>
                </Link>
            </CardFooter> */}
        </Card>
    );
}

/**
 * search page
 * @returns JSX.Element
 */
export default function Search() {
    const [params] = useSearchParams();
    const [maCKs, setMaCKs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffSet] = useState(25);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    // //dummy data
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setMaCKs([...Array(100).keys()]);
    //         setLoading(false);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        setLoading(true);
        try {
            axios
                .get(
                    'https://wifeed.vn/api/thong-tin-co-phieu/danh-sach-ma-chung-khoan',
                    {
                        params: {
                            loaidn: 1,
                            san: 'HOSE',
                        },
                    }
                )
                .then((res) => {
                    setMaCKs(res.data.data);
                    setLoading(false);
                });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }, []);

    const lastIndex = offset * currentPage;
    const firstIndex = lastIndex - offset;
    const results = maCKs.slice(firstIndex, lastIndex);

    return (
        <>
            <div className='text-6xl flex justify-center'>
                <span className='capitalize'>{t('search')}: </span>
                <span>"{params.get('q')}"</span>
            </div>
            <div className='relative !w-20 ml-20'>
                <Select
                    label='show'
                    value={String(offset)}
                    onChange={(val) => {
                        setCurrentPage(1);
                        setOffSet(Number(val));
                    }}
                    className=''
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    <Option value='1'>1</Option>
                    <Option value='5'>5</Option>
                    <Option value='25'>25</Option>
                    <Option value='50'>50</Option>
                    <Option value='100'>100</Option>
                </Select>
            </div>
            <div className='flex justify-center'>
                {loading ? (
                    <div className='flex justify-center items-center'>
                        <Spinner
                            color='green'
                            className='size-12'
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        />
                        {/* <span  className='ml-2 text-3xl'>Loading</span> */}
                    </div>
                ) : (
                    <div>
                        <div className='mx-4 my-auto grid grid-cols-4 gap-4 justify-around'>
                            {results.map((result) => (
                                <SearchResultCard
                                    code={result.code || result}
                                    fullname_vi={result.fullname_vi}
                                    loaidn={result.loaidn}
                                    san={result.san}
                                />
                            ))}
                            {/* {result.map((c) => (
                            <span className='text-5xl p-8 flex justify-center items-center rounded bg-red-500'>
                                {c}
                            </span>
                        ))} */}
                        </div>
                        <div className='flex justify-center mt-auto'>
                            <Pagination
                                length={maCKs.length}
                                offset={offset}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
