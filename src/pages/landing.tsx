import LanguageButton from '../components/languageButton';
import landing_body1_group3 from '../assets/img/landing_body1_group3.svg';
import landing_body1_group5 from '../assets/img/landing_body1_group5.png';
import landing_body1_people1 from '../assets/img/landing_body1_people1.png';
import landing_body1_fullStar from '../assets/img/landing_body1_fullStar.png';
import landing_body2_pic1 from '../assets/img/landing_body2_pic1.png';
import landing_body2_pic2 from '../assets/img/landing_body2_pic2.png';
import landing_body2_pic3 from '../assets/img/landing_body2_pic3.png';
import landing_body2_pic4 from '../assets/img/landing_body2_pic4.png';
import landing_body2_pic5 from '../assets/img/landing_body2_pic5.png';
import landing_body1_backgroundIMG from '../assets/img/landing_body1_backgroundIMG.svg';

/**
 * landing page
 * @returns JSX.Element
 */
export default function Landing() {
  return (
    <>
      <section className='h-auto pb-40'>
        <div className='flex flex-col items-center h-auto pb-12 rounded-b-[50px] bg-gradient-to-t from-primary-medium to-white'>
          {/*  */}
          <div className='bg-white h-auto pb-8 rounded-b-[50px]'>
            <span className='z-10 flex flex-col items-center'>
              <h3 className='px-24 text-8xl text-center text-wrap track- font-bold text-primary'>
                Bạn có đang tìm gia sư không ?
              </h3>
              {/* <img className='' src={landing_body1_backgroundIMG}></img> */}
            </span>

            <span className='z-20 grid grid-cols-5 h-auto'>
              <div className='flex h-full justify-center '>
                <img src={landing_body1_group3}></img>
              </div>

              <div className='col-start-2 col-end-4 flex flex-col p-4 '>
                <div className='h-full w-full flex ml-24 items-center'>
                  <div className=' p-3 w-fit h-fit rounded-xl bg-secondary-lightGray'>
                    <div className='grid grid-cols-3 h-auto '>
                      <div className='flex justify-center items-center'>
                        <div className='size-10 rounded-lg bg-primary'></div>
                      </div>
                      <div className='col-span-2 flex flex-col items-center'>
                        <h3>Online Course</h3>
                        <h1 className='font-bold text-lg'>108+</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-full w-full flex items-end'>
                  <div className='p-1 size-fit rounded-lg bg-primary-sub'>
                    <img src={landing_body1_group5}></img>
                  </div>
                </div>
              </div>

              <div className='flex justify-end pt-10 pr-5'>
                <div className=' p-3 w-fit h-fit rounded-xl bg-secondary-lightGray'>
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

              <div className=''>
                <div className='flex flex-col justify-center items-center '>
                  <img className='' src={landing_body1_people1}></img>
                  <div className='w-64 h-auto rounded-lg shadow-lg bg-[#eaeaea]'>
                    <div className='flex mx-3 my-4 items-center'>
                      <div className='size-8 rounded-full bg-[#d3d3d3]'></div>
                      <div className='mx-2 font-semibold'>Alex P.</div>
                      <img className='ml-16' src={landing_body1_fullStar}></img>
                    </div>
                    <div className='mx-3 mb-5'>
                      Rất khuyến khích cho bất cứ ai muốn nâng cấp kỹ năng của
                      họ
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          {/*  */}
          <div className='pb-5 relative mt-20 w-4/5 h-auto rounded-3xl bg-white'>
            <div className='flex w-full justify-center'>
              <div className=' absolute -top-8 h-auto p-3 w-11/12 rounded-2xl bg-secondary-lightestBlue'>
                <div className='grid grid-cols-5 gap-2'>
                  <button className='text-xl flex justify-center px-3 py-2 bg-secondary-lighterBlue rounded-md'>
                    Khóa học
                  </button>
                  <button className='text-xl flex justify-center px-3 py-1 '>
                    Môn học
                  </button>
                  <button className='text-xl flex justify-center px-3 py-1 '>
                    Chúng tôi
                  </button>
                  <button className='text-xl flex justify-center px-3 py-1 '>
                    Hoạt động
                  </button>
                  <button className='text-xl flex justify-center px-3 py-1 '>
                    Liên hệ
                  </button>
                </div>
              </div>
            </div>

            <div className='pt-12'>
              <div className=' grid grid-cols-10 grid-rows-2 gap-2 '>
                <div className='col-start-1 col-end-5 flex justify-center items-center'>
                  <img src={landing_body2_pic1}></img>
                </div>
                <div className='col-start-5 col-end-9 flex justify-center items-center'>
                  <img src={landing_body2_pic2}></img>
                </div>
                <div className='col-start-9 col-span-2 flex justify-center items-center'>
                  <img src={landing_body2_pic3}></img>
                </div>
                <div className='col-start-1 col-end-6 flex justify-center items-center'>
                  <img src={landing_body2_pic4}></img>
                </div>
                <div className='col-start-6 col-end-11 flex justify-center items-center'>
                  <img src={landing_body2_pic5}></img>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        123
      </section>
    </>
  );
}
