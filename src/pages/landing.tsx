import LanguageButton from '../components/language.button';
import landing_body1_group3 from '../assets/img/landing_body1_group3.svg';
import landing_body1_group5 from '../assets/img/landing_body1_group5.png';
import landing_body1_people1 from '../assets/img/landing_body1_people1.png';
import landing_body1_fullStar from '../assets/img/landing_body1_fullStar.png';
import landing_body1_backgroundCircle from '../assets/img/landing_body1_backgroundCircle.svg';
import landing_body1_backgroundPeople from '../assets/img/landing_body1_backgroundPeople.svg';
import landing_body1_backgroundIMG from '../assets/img/landing_body1_backgroundIMG.svg';
import landing_body2_course_pic1 from '../assets/img/landing_body2/landing_body2_course_pic1.png';
import landing_body2_course_pic2 from '../assets/img/landing_body2/landing_body2_course_pic2.png';
import landing_body2_course_pic3 from '../assets/img/landing_body2/landing_body2_course_pic3.png';
import landing_body2_course_pic4 from '../assets/img/landing_body2/landing_body2_course_pic4.png';
import landing_body2_course_pic5 from '../assets/img/landing_body2/landing_body2_course_pic5.png';
import landing_body2_subject_pic1 from '../assets/img/landing_body2/landing_body2_subject_pic1.png';
import landing_body2_subject_pic2 from '../assets/img/landing_body2/landing_body2_subject_pic2.png';
import landing_body2_subject_pic3 from '../assets/img/landing_body2/landing_body2_subject_pic3.png';
import landing_body2_subject_pic4 from '../assets/img/landing_body2/landing_body2_subject_pic4.png';
import landing_body2_subject_pic5 from '../assets/img/landing_body2/landing_body2_subject_pic5.png';
import landing_body2_aboutUs_pic1 from '../assets/img/landing_body2/landing_body2_aboutUs_pic1.png';
import landing_body2_aboutUs_pic2 from '../assets/img/landing_body2/landing_body2_aboutUs_pic2.png';
import landing_body2_aboutUs_pic3 from '../assets/img/landing_body2/landing_body2_aboutUs_pic3.png';
import landing_body2_aboutUs_pic4 from '../assets/img/landing_body2/landing_body2_aboutUs_pic4.png';
import landing_body2_aboutUs_pic5 from '../assets/img/landing_body2/landing_body2_aboutUs_pic5.png';
import landing_body2_activities_pic1 from '../assets/img/landing_body2/landing_body2_activities_pic1.png';
import landing_body2_activities_pic2 from '../assets/img/landing_body2/landing_body2_activities_pic2.png';
import landing_body2_activities_pic3 from '../assets/img/landing_body2/landing_body2_activities_pic3.png';
import landing_body2_activities_pic4 from '../assets/img/landing_body2/landing_body2_activities_pic4.png';
import landing_body2_activities_pic5 from '../assets/img/landing_body2/landing_body2_activities_pic5.png';
import landing_body2_contact_pic1 from '../assets/img/landing_body2/landing_body2_contact_pic1.png';
import landing_body2_contact_pic2 from '../assets/img/landing_body2/landing_body2_contact_pic2.png';
import landing_body2_contact_pic3 from '../assets/img/landing_body2/landing_body2_contact_pic3.png';
import landing_body2_contact_pic4 from '../assets/img/landing_body2/landing_body2_contact_pic4.png';
import landing_body3_people1 from '../assets/img/landing_body3_people1.png';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

/**
 * landing page
 * @returns JSX.Element
 */
export default function Landing() {
  const data = [
    {
      label: 'KHÓA HỌC',
      value: 'KHÓA HỌC',
      desc: (
        <div className='grid grid-cols-10 grid-rows-2 gap-2 '>
          <div className='col-start-1 col-end-5 flex justify-center items-center'>
            <img
              src={landing_body2_course_pic1}
              alt='Some picture from course'
            />
          </div>
          <div className='col-start-5 col-end-9 flex justify-center items-center'>
            <img
              src={landing_body2_course_pic2}
              alt='Some picture from course'
            />
          </div>
          <div className='col-start-9 col-span-2 flex justify-center items-center'>
            <img
              src={landing_body2_course_pic3}
              alt='Some picture from course'
            />
          </div>
          <div className='col-start-1 col-end-6 flex justify-center items-center'>
            <img
              src={landing_body2_course_pic4}
              alt='Some picture from course'
            />
          </div>
          <div className='col-start-6 col-end-11 flex justify-center items-center'>
            <img
              src={landing_body2_course_pic5}
              alt='Some picture from course'
            />
          </div>
        </div>
      ),
    },
    {
      label: 'MÔN HỌC',
      value: 'MÔN HỌC',
      desc: (
        <div className='grid grid-cols-10 grid-rows-2 gap-2 '>
          <div className='col-start-1 col-end-5 flex justify-center items-center'>
            <img
              src={landing_body2_subject_pic1}
              alt='Some picture from subject'
            />
          </div>
          <div className='col-start-5 col-end-9 flex justify-center items-center'>
            <img
              src={landing_body2_subject_pic2}
              alt='Some picture from subject'
            />
          </div>
          <div className='col-start-9 col-span-2 flex justify-center items-center'>
            <img
              src={landing_body2_subject_pic3}
              alt='Some picture from subject'
            />
          </div>
          <div className='col-start-1 col-end-6 flex justify-center items-center'>
            <img
              src={landing_body2_subject_pic4}
              alt='Some picture from subject'
            />
          </div>
          <div className='col-start-6 col-end-11 flex justify-center items-center'>
            <img
              src={landing_body2_subject_pic5}
              alt='Some picture from subject'
            />
          </div>
        </div>
      ),
    },
    {
      label: 'CHÚNG TÔI',
      value: 'CHÚNG TÔI',
      desc: (
        <div className='grid grid-cols-10 grid-rows-2 gap-2 '>
          <div className='col-start-1 col-end-5 flex justify-center items-center'>
            <img
              src={landing_body2_aboutUs_pic1}
              alt='Some picture from about us'
            />
          </div>
          <div className='col-start-5 col-end-9 flex justify-center items-center'>
            <img
              src={landing_body2_aboutUs_pic2}
              alt='Some picture from about us'
            />
          </div>
          <div className='col-start-9 col-span-2 flex justify-center items-center'>
            <img
              src={landing_body2_aboutUs_pic3}
              alt='Some picture from about us'
            />
          </div>
          <div className='col-start-1 col-end-6 flex justify-center items-center'>
            <img
              src={landing_body2_aboutUs_pic4}
              alt='Some picture from about us'
            />
          </div>
          <div className='col-start-6 col-end-11 flex justify-center items-center'>
            <img
              src={landing_body2_aboutUs_pic5}
              alt='Some picture from about us'
            />
          </div>
        </div>
      ),
    },
    {
      label: 'HOẠT ĐỘNG',
      value: 'HOẠT ĐỘNG',
      desc: (
        <div className='grid grid-cols-10 grid-rows-2 gap-2 '>
          <div className='col-start-1 col-end-5 flex justify-center items-center'>
            <img
              src={landing_body2_activities_pic1}
              alt='Some picture from activities'
            />
          </div>
          <div className='col-start-5 col-end-9 flex justify-center items-center'>
            <img
              src={landing_body2_activities_pic2}
              alt='Some picture from activities'
            />
          </div>
          <div className='col-start-9 col-span-2 flex justify-center items-center'>
            <img
              src={landing_body2_activities_pic4}
              alt='Some picture from activities'
            />
          </div>
          <div className='col-start-1 col-end-6 flex justify-center items-center'>
            <img
              src={landing_body2_activities_pic5}
              alt='Some picture from activities'
            />
          </div>
          <div className='col-start-6 col-end-11 flex justify-center items-center'>
            <img
              src={landing_body2_course_pic5}
              alt='Some picture from activities'
            />
          </div>
        </div>
      ),
    },
    {
      label: 'LIÊN HỆ',
      value: 'LIÊN HỆ',
      desc: (
        <div className='grid grid-cols-10 grid-rows-2 gap-2 '>
          <div className='col-start-1 col-end-6 flex justify-center items-center'>
            <img
              src={landing_body2_contact_pic1}
              alt='Some picture from contact'
            />
          </div>
          <div className='col-start-6 col-end-11 flex justify-center items-center'>
            <img
              src={landing_body2_contact_pic2}
              alt='Some picture from contact'
            />
          </div>
          <div className='col-start-1 col-end-6 flex justify-center items-center'>
            <img
              src={landing_body2_contact_pic3}
              alt='Some picture from contact'
            />
          </div>
          <div className='col-start-6 col-end-11 flex justify-center items-center'>
            <img
              src={landing_body2_contact_pic4}
              alt='Some picture from contact'
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className='h-auto mb-8 '>
        <div className='flex flex-col items-center h-auto pb-12 rounded-b-[50px] bg-gradient-to-t from-secondary-lighterBlue to-white'>
          <div className='relative bg-white h-auto rounded-b-[50px]'>
            <div className='z-10 w-full flex flex-col items-center'>
              <h3 className='px-24 text-8xl text-center text-wrap track- font-bold text-primary'>
                Bạn có đang tìm gia sư không ?
              </h3>
              <img className=' ' src={landing_body1_backgroundCircle} />
            </div>

            <div className='z-20 absolute bottom-0 w-full grid grid-cols-5 gap-4 h-auto pb-[124px]'>
              <div className='flex h-full justify-center '>
                <img src={landing_body1_group3} />
              </div>

              <div className='z-20 size-full flex flex-col justify-center items-end'>
                <div className='mt-20 p-3 w-fit rounded-xl bg-secondary-lightGray  shadow-2xl'>
                  <div className='grid grid-cols-3 h-auto'>
                    <div className='flex justify-center items-center'>
                      <div className='size-10 rounded-lg bg-primary'></div>
                    </div>
                    <div className='col-span-2 flex flex-col items-center'>
                      <h3>Online Course</h3>
                      <h1 className='font-bold text-lg'>108+</h1>
                    </div>
                  </div>
                </div>
                <div className='z-20 size-full flex ml-4 items-end'>
                  <div className='p-1 size-fit shadow-2xl rounded-lg bg-primary-sub'>
                    <img src={landing_body1_group5} />
                  </div>
                </div>
              </div>

              <div className=''>
                <img
                  className='absolute bottom-0 right-1/2 translate-x-1/2'
                  src={landing_body1_backgroundPeople}
                />
              </div>
              <div className='z-20 w-full h-full flex'>
                <div className=' p-3 w-fit h-fit rounded-xl bg-secondary-lightGray shadow-2xl'>
                  <div className='grid grid-cols-3 h-auto '>
                    <div className='flex justify-center items-center'>
                      <div className='size-10 rounded-lg bg-primary'></div>
                    </div>
                    <div className='col-span-2 flex flex-col items-center'>
                      <h3>Student & Tutor</h3>
                      <h1 className='font-bold text-lg'>426+</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-center '>
                <img className='' src={landing_body1_people1} />
                <div className='w-64 h-auto rounded-lg shadow-lg bg-[#eaeaea]'>
                  <div className='flex mx-3 my-4 items-center'>
                    <div className='size-8 rounded-full bg-[#d3d3d3]'></div>
                    <div className='mx-2 font-semibold'>Alex P.</div>
                    <img className='ml-16' src={landing_body1_fullStar} />
                  </div>
                  <div className='mx-3 mb-5'>
                    Rất khuyến khích cho bất cứ ai muốn nâng cấp kỹ năng của họ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pb-5 relative mt-20 w-4/5 h-auto rounded-3xl bg-white'>
            <div className='w-full h-auto'>
              <Tabs value='KHÓA HỌC'>
                <TabsHeader
                  className='absolute w-11/12 left-1/2 -translate-x-1/2 -top-[2.5%] bg-opacity-100 bg-secondary-lightestBlue'
                  indicatorProps={{
                    className:
                      'bg-secondary-lighterBlue shadow-none !text-gray-900',
                  }}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      className=''
                      key={value}
                      value={value}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      <div>{desc}</div>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>

        <div className='pt-28 pb-16'>
          <div className='grid grid-cols-3'>
            <div className='flex flex-col h-full w-full items-end'>
              <div className='flex flex-col items-center text-center w-4/5'>
                <h1 className='w-full font-semibold text-primary text-4xl'>
                  Phần mềm Online
                </h1>
                <div className='mt-2 w-4/5 rounded-2xl text-white bg-primary-medium'>
                  <h3 className='px-5 py-2'>
                    Tiện lợi, linh hoạt, cá nhân hóa, tương tác, giàu nội dung,
                    tiết kiệm chi phí. Nâng cao kết quả học tập, phát triển kỹ
                    năng, tăng cường sự tự tin, hình thành thói quen học tập
                    tốt.
                  </h3>
                </div>
              </div>

              <div className='mr-28 mt-14 flex flex-col items-center text-center w-4/5'>
                <h1 className='w-full font-semibold text-primary text-4xl'>
                  Đội ngũ gia sư
                </h1>
                <div className='mt-2 w-4/5 rounded-2xl text-white bg-primary-medium'>
                  <h3 className='px-5 py-2'>
                    Đội ngũ gia sư là một phần quan trọng trong hệ thống giáo
                    dục, đóng góp vào việc nâng cao chất lượng học tập của học
                    sinh. Gia sư có thể giúp học sinh hiểu bài tốt hơn, ôn luyện
                    thi cử hiệu quả và phát triển các kỹ năng cần thiết.
                  </h3>
                </div>
              </div>
            </div>

            <div className='relative flex justify-center size-full'>
              <div className='z-10 top-10 absolute aspect-square rounded-full bg-primary-sub w-[125%]'></div>
              <div className='z-20'>
                <img className='' src={landing_body3_people1} />
                <div className='w-full h-auto py-2 grid grid-cols-4 bg-primary text-white rounded-2xl'>
                  <div className='flex flex-col items-center'>
                    <h1 className='font-semibold'>106+</h1>
                    <h3 className='text-xs'>Online Course</h3>
                  </div>
                  <div className='flex flex-col items-center'>
                    <h1 className='font-semibold'>426+</h1>
                    <h3 className='text-xs'>Student & Tutor</h3>
                  </div>
                  <div className='flex flex-col items-center'>
                    <h1 className='font-semibold'>46+</h1>
                    <h3 className='text-xs'>Quality Tutors</h3>
                  </div>
                  <div className='flex flex-col items-center'>
                    <h1 className='font-semibold'>4.8</h1>
                    <h3 className='text-xs'>Rating web</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col h-full w-full items-start'>
              <div className='flex flex-col items-center text-center w-4/5'>
                <h1 className='w-full font-semibold text-primary text-4xl'>
                  Chất lượng gia sư
                </h1>
                <div className='mt-2 w-4/5 rounded-2xl text-white bg-primary-medium'>
                  <h3 className='px-5 py-2'>
                    Một gia sư tốt không chỉ có kiến thức chuyên môn sâu rộng mà
                    còn có nhiều phẩm chất khác để truyền đạt kiến thức hiệu quả
                    và giúp học sinh tiến bộ.
                  </h3>
                </div>
              </div>

              <div className='ml-28 mt-14 flex flex-col items-center text-center w-4/5'>
                <h1 className='w-full font-semibold text-primary text-4xl'>
                  Chất lượng học sinh
                </h1>
                <div className='mt-2 w-4/5 rounded-2xl text-white bg-primary-medium'>
                  <h3 className='px-5 py-2'>
                    Chất lượng học sinh là yếu tố quan trọng quyết định sự phát
                    triển của đất nước. Do đó, cần có sự quan tâm và đầu tư đúng
                    mức để đảm bảo chất lượng học sinh ngày càng được nâng cao.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
