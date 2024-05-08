import LanguageButton from '../components/languageButton';
import landing_Group3Body1 from '../assets/img/landing_Group3Body1.svg';
import icon_landing_group5 from '../assets/img/icon_landing_group5.png';
import icon_landing_people_4 from '../assets/img/icon_landing_people_4.png';
import icon_landing_star_fullstar from '../assets/img/icon_landing_star_fullstar.png';
import landing_backgroundPicBody1 from '../assets/img/landing_backgroundPicBody1.svg';

/**
 * landing page
 * @returns JSX.Element
 */
export default function Landing() {
  return (
    <>
      <section className='bg-gray-200 h-auto pb-40'>
        <div className='bg-gray-400 h-auto pb-40 rounded-b-[50px]'>
          <div className='bg-white h-auto pb-8 rounded-b-[50px]'>
            <span className='z-10 flex flex-col items-center'>
              <h3 className='px-24 text-8xl text-center text-wrap track- font-bold text-primary'>
                Bạn có đang tìm gia sư không ?
              </h3>
              {/* <img className='' src={landing_backgroundPicBody1}></img> */}
            </span>

            <span className='z-20 grid grid-cols-5 h-auto'>
              <div className='flex h-full justify-center '>
                <img src={landing_Group3Body1}></img>
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
                    <img src={icon_landing_group5}></img>
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
                    <img className='' src={icon_landing_people_4}></img>
                    <div className='w-64 h-auto rounded-lg shadow-lg bg-[#eaeaea]'>
                      <div className='flex mx-3 my-4 items-center'>
                        <div className='size-8 rounded-full bg-[#d3d3d3]'></div>
                        <div className='mx-2 font-semibold'>Alex P.</div>
                        <img
                          className='ml-16'
                          src={icon_landing_star_fullstar}
                        ></img>
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
          123
        </div>
      </section>
    </>
  );
}
