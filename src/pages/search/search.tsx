import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OldPagination from '../../components/pagination';
import { capitalize } from '../../utils/utils';
import Loading from '../../components/loading';
import { Chip } from '@material-tailwind/react';
import { SearchBar, SearchTitle, BriefCourseDetailsCard, FilterBar } from '../../components/search_child_components';
import api from '../../api/api';


/**
 * search page
 * @returns JSX.Element
 */
export default function Search() {
  const [params] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [resultsAvailable, setResultsAvailable] = useState(true);
  const [currentPage, setCurrentPage] = useState(Number(params.get('p')) || 1);
  const [totalPageCount, setTotalPageCount] = useState(0)
  const offset = 5;
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const getAllCoursesUrl = '/api/courses';
  const [courseCategory, setCourseCategory] = useState(null);


  useEffect(() => {
    setLoading(true);

    try {
      fetchCourses()
    } catch (error) {
      //Handle additional errors here 
    }
  }, [currentPage, courseCategory]);

  const fetchCourses = () => {
    api
      .get(
        getAllCoursesUrl,
        {
          params: {
            name: params.get('q'),
            category: courseCategory,
            page: currentPage,
            size: offset,
          },
        }
      )
      .then((res) => {
        setSearchResult(res.data.returnData.coursedtos);
        setTotalPageCount(res.data.returnData.totalpagecount)
        setLoading(false);
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Current error:', error);
        setLoading(false);
        setResultsAvailable(false)
      });
  }
  const beginFilter = (category: string) => {
    setCourseCategory(category)
  }
  return (
    <div className='mt-5 w-full'>
      <div className='text-center'>
        <SearchTitle />
      </div>
      <div className='flex justify-center mt-2'>
        <FilterBar courseCategoryChangeHandler={beginFilter} />
      </div>
      <div className='flex mt-5 justify-center '>
        {loading ? (
          <div className='p-9 m-9 gap-4'>
            <Loading color='teal' className='size-12' />
          </div>
        ) : (
          resultsAvailable ? (
            <div>
              <div className='p-9 m-9 grid grid-cols-1 gap-4 
            bg-teal-200 rounded-md'>
                {searchResult.map((result, index) => (
                  <BriefCourseDetailsCard
                    key={index}
                    courseid={result.id}
                    name={result.name}
                    teacherName={result.teachername}
                    rating={result.rating}
                    avatarUrl='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                    description={result.description}
                  />
                ))}
              </div>
              <div className='flex justify-center mx-5'>
                <OldPagination
                  totalPageCount={totalPageCount} //determine the total number of pages in the actual database.
                  offset={offset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          ) : (
            <Chip
              className="bg-primary text-center text-sm my-10"
              value={capitalize(t('Chưa có khóa học nào phù hợp với từ khóa bạn đã tìm kiếm. Xin hãy thử với từ khóa khác bạn nhé!'))}
              size="lg" />
          )
        )}
      </div>
    </div>
  );
}
