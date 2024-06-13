import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import OldPagination from '../../components/pagination';
import Loading from '../../components/loading';
import { SearchBar, SearchTitle, BriefCourseDetailsCard, FilterBar } from '../../components/search_child_components';

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
  const [offset, setOffSet] = useState(Number(params.get('offset')) || 15);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();



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
    if (!offsets.find((o) => o === offset)) setOffSet(15);
  }, [offset, offsets]);

  return (
    <div className='mt-5'>
      <div className='text-center'>
        <SearchTitle />
      </div>
      <div className='flex justify-center mt-2'>
        <FilterBar />
      </div>
      <div className='flex mt-5 '>
        {loading ? (
          <Loading color='teal' className='size-12' />
        ) : (
          <div>
            <div className='py-9 my-9 grid grid-cols-1 gap-4 justify-items-center
            bg-teal-200 p-2 rounded-md'>
              {displayResults.map((result, index) => (
                <BriefCourseDetailsCard
                  courseid={index}
                  name={result.fullname_vi}
                  teacherName='Đào Việt Anh'
                  rating={5.0}
                  avatarUrl='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                  description={result.san}
                />
              ))}
            </div>
            <div className='flex justify-center mx-5'>
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
    </div>
  );
}
