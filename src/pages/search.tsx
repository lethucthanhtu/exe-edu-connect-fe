import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Option,
  Select,
  Spinner,
  Typography,
} from '@material-tailwind/react';
import OldPagination from '../components/pagination';
import Loading from '../components/loading';

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
    </Card>
  );
}

/**
 * search page
 * @returns JSX.Element
 */
export default function Search() {
  const [params] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(params.get('p')) || 1);
  const [offset, setOffSet] = useState(Number(params.get('offset')) || 25);
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
          setSearchResult(res.data.data);
          setLoading(false);
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, []);

  const lastIndex = offset * currentPage;
  const firstIndex = lastIndex - offset;
  const displayResults = searchResult.slice(firstIndex, lastIndex);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const offsets = [1, 5, 25, 50, 75, 100];

  // handle mismatch offset & page
  useEffect(() => {
    // const pages = Math.ceil(searchResult.length / offset);
    if (!offsets.find((o) => o === offset)) setOffSet(25);
  }, [offset, offsets]);

  return (
    <>
      <div className='text-6xl flex justify-center'>
        <span className='capitalize'>{t('search')}:</span>
        <span>"{params.get('q')}"</span>
      </div>
      <div className='relative !w-20 ml-20'>
        <Select
          label='show'
          value={offset + ''}
          onChange={(val) => {
            setCurrentPage(1);
            setOffSet(Number(val));
          }}
          className=''
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {offsets.map((offset) => (
            <Option key={offset} value={offset + ''}>
              {offset}
            </Option>
          ))}
        </Select>
      </div>
      <div className='flex justify-center items-center'>
        {loading ? (
          <Loading color='teal' className='size-12' />
        ) : (
          <div>
            <div className='mx-4 my-auto grid grid-cols-4 gap-4 justify-around'>
              {displayResults.map((result, index) => (
                <SearchResultCard
                  key={index}
                  code={result.code || result}
                  fullname_vi={result.fullname_vi}
                  loaidn={result.loaidn}
                  san={result.san}
                />
              ))}
            </div>
            <div className='flex justify-center mt-auto'>
              <OldPagination
                length={searchResult.length}
                offset={offset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                // paginationPagesDisplay={5}
                // showPageInput='false'
                // showNavigateText='false'
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
