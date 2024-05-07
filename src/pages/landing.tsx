import LanguageButton from '../components/languageButton';
import icon_People_1 from '../../public/img/icon_People_1.png';
import icon_People_2 from '../../public/img/icon_People_2.png';
import icon_People_3 from '../../public/img/icon_People_3.png';
import icon_landing_people_4 from '../../public/img/icon_landing_people_4.png';
import icon_landing_star_fullstar from '../../public/img/icon_landing_star_fullstar.png';

/**
 * landing page
 * @returns JSX.Element
 */
export default function Landing() {
  return (
    <div>
      {/* <LanguageButton />
      <div className='flex justify-center'>
        <span className='text-6xl capitalize'>Landing</span>
      </div> */}
      <h1 className='z-10 px-44 text-8xl text-center text-wrap track- font-bold text-primary'>
        Bạn có đang tìm gia sư không ?
      </h1>
      <div className='flex relative'>
        <div className='grid relative w-3/12'>
          <div className='grid justify-end grid-col-1 '>
            <img
              src={icon_People_1}
              className=' my-2 size-40 rounded-full bg-[#388984]'
            ></img>
            <img
              src={icon_People_3}
              className=' size-28 rounded-full bg-[#65C3B7]'
            ></img>
          </div>
          <div className='grid grid-col-2 absolute w-full h-full justify-start items-center pl-20'>
            <img
              src={icon_People_2}
              className='size-28 rounded-full bg-[#91b5b3]'
            ></img>
          </div>
        </div>
        <div className='flex justify-center absolute right-0 w-4/12 '>
          <div className='relative my-14 size-52 rounded-full bg-[#91b5b3]'></div>
          <div className='flex flex-col justify-center items-center absolute'>
            <img className='' src={icon_landing_people_4}></img>
            <div className='w-64 h-auto rounded-lg shadow-[3px_3px_0px_0px_rgb(153, 153, 153)] bg-[#eaeaea]'>
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
      </div>
      <div className='h-10 bg-red-500'></div>
    </div>
  );
}
