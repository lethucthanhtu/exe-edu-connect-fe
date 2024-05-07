import LanguageButton from '../components/languageButton';
import icon_People_1 from '../assets/img/icon_People_1.png';
import icon_People_2 from '../assets/img/icon_People_2.png';
import icon_People_3 from '../assets/img/icon_People_3.png';
import icon_landing_people_4 from '../assets/img/icon_landing_people_4.png';
import icon_landing_people_5 from '../assets/img/icon_landing_people_5.png';
import icon_landing_group5 from '../assets/img/icon_landing_group5.png';
import icon_landing_groupBG from '../assets/img/icon_landing_groupBG.png';
import icon_landing_star_fullstar from '../assets/img/icon_landing_star_fullstar.png';

/**
 * landing page
 * @returns JSX.Element
 */
export default function Landing() {
  return (
    <div className='mb-10 h-full'>
      {/* <LanguageButton />
      <div className='flex justify-center'>
        <span className='text-6xl capitalize'>Landing</span>
      </div> */}
      <h1 className='z-10 px-44 text-8xl text-center text-wrap track- font-bold text-primary'>
        Bạn có đang tìm gia sư không ?
      </h1>
      <div className='flex '>
        <div className='grid relative w-3/12'>
          <div className='grid justify-end grid-col-1 '>
            <img
              src={icon_People_1}
              className='z-10 my-2 size-40 rounded-full bg-[#388984]'
            ></img>
            <img
              src={icon_People_3}
              className='z-10 size-28 rounded-full bg-[#65C3B7]'
            ></img>
          </div>
          <div className='grid grid-col-3 absolute w-full h-full justify-start items-center pl-20'>
            <img
              src={icon_People_2}
              className='z-10 size-28 rounded-full bg-[#91b5b3]'
            ></img>
          </div>
        </div>
        {/*  */}
        <div className='z-10 w-2/12 '>
          {/* <div className='w-full flex flex-col'> */}
          <div className='w-full h-44 flex items-end justify-end'>
            <div className='p-5 w-44 h-20 rounded-2xl flex items-center bg-[#eaeaea]'>
              <div className=' w-14 h-10 rounded-lg bg-[#246c67]'></div>
              <div className='flex items-center flex-col size-full text-sm ml-2 '>
                <h3>Online course</h3>
                <h1 className='font-bold text-lg '>108+</h1>
              </div>
            </div>
          </div>
          <div className='w-full h-36 flex items-end'>
            <div className='w-full '>
              <div className='w-9/12 p-2 rounded-lg bg-[#3fb4a5]'>
                <img src={icon_landing_group5}></img>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className='w-2/12'>
          <div className='absolute inset-x-72 inset-y-56 '>
            <img src={icon_landing_groupBG}></img>
          </div>
          <div className='absolute inset-x-72 inset-y-[215px]'>
            <img src={icon_landing_people_5}></img>
          </div>
        </div>
        <div className='w-2/12'>Check_4</div>

        <div className='flex justify-center right-0 w-3/12 '>
          <div className='relative my-14 size-52 rounded-full bg-[#91b5b3]'></div>
          <div className='flex flex-col justify-center items-center absolute'>
            <img className='' src={icon_landing_people_4}></img>
            <div className='w-64 h-auto rounded-lg shadow-lg bg-[#eaeaea]'>
              <div className='flex mx-3 my-4 items-center'>
                <div className='size-8 rounded-full bg-[#d3d3d3]'></div>
                <div className='mx-2 font-semibold'>Alex P.</div>
                <img className='ml-16' src={icon_landing_star_fullstar}></img>
              </div>
              <div className='mx-3 mb-5'>
                Rất khuyến khích cho bất cứ ai muốn nâng cấp kỹ năng của họ
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex justify-center w-screen'>
          <img src={icon_landing_people_5}></img>
        </div> */}
      </div>
    </div>
  );
}
