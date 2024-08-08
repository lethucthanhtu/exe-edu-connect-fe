import teaching_3 from '../assets/img/contact/teaching_3.jpeg';
import teaching_5 from '../assets/img/contact/teaching_5.jpeg';
import teaching_6 from '../assets/img/contact/teaching_6.jpeg';
import teacher_1 from '../assets/img/contact/teacher_1.jpeg';
import teacher_2 from '../assets/img/contact/teacher_2.jpeg';
import teacher_3 from '../assets/img/contact/teacher_3.jpeg';
import teacher_4 from '../assets/img/contact/teacher_4.jpeg';
import st_1 from '../assets/img/contact/study_together_1.jpeg';
import wt from '../assets/img/contact/work_together.jpeg';
import { Button, Typography } from '@material-tailwind/react';
import { capitalize } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/** */
export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id='main'
        className='container flex flex-col md:flex-row justify-center gap-6'
      >
        <div className='basis-1/2 flex aspect-square justify-center items-center gap-8'>
          <div className='basis-1/3 flex flex-col relative'>
            <div className='aspect-square basis-1/3 relative'>
              <img
                src={teacher_3}
                className='aspect-square rounded-tl-[50%] object-cover absolute -bottom-[10%] shadow-2xl'
              />
            </div>
            <div className='aspect-square basis-1/3 flex justify-end items-center relative'>
              <img
                src={teaching_6}
                className='aspect-square w-3/5 rounded-bl-[50%] object-cover absolute bottom-0'
              />
            </div>
            <div className='aspect-square basis-1/3 flex justify-start items-center relative'>
              <img
                src={teacher_2}
                className='aspect-square w-2/3 rounded-bl-[50%] object-cover shadow-2xl'
              />
            </div>
          </div>
          <div className='basis-1/3 flex flex-col'>
            <div className='aspect-square basis-1/3 flex justify-start relative'>
              <img
                src={teaching_3}
                className='aspect-square rounded-2xl w-1/3 object-cover shadow-2xl absolute top-[25%]'
              />
            </div>
            <div className='aspect-square basis-1/3 relative'>
              <img
                src={teacher_1}
                className='aspect-square rounded-tr-[50%] object-cover absolute -top-[25%] shadow-2xl'
              />
            </div>
            <div className='aspect-square basis-1/3 relative flex justify-start items-start'>
              <img
                src={st_1}
                className='aspect-square w-3/5 rounded-br-[50%] object-cover absolute -top-[10%] left-2 shadow-2xl'
              />
            </div>
          </div>
          <div className='basis-1/3 grid grid-rows-3 gap-8'>
            <div className='row-span-2 relative'>
              <img
                src={teacher_4}
                className='aspect-square w-1/2 rounded-tr-[50%] absolute top-[10%] -left-[25%] shadow-2xl'
              />
            </div>
            <div className='aspect-square basis-1/3 relative'>
              <img
                src={teaching_5}
                className='aspect-square rounded-br-[50%] shadow-2xl absolute -top-[85%]'
              />
            </div>
          </div>
        </div>
        <div
          id='text'
          className='basis-1/2 flex flex-col justify-center items-start gap-4'
        >
          <Typography
            variant='h1'
            className='text-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('about us'))}
            <Typography
              variant='paragraph'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(
                t(
                  `welcome to our tutoring website - a dedicated platform for students who wish to share their knowledge and help others. We understand that many students possess the skills and knowledge but have not had the opportunity to prove themselves in the job market. Here, you dont need to have a clear degree; what matters is that your abilities have been evaluated and recognized by our production team. Our website offers opportunities for students who want to earn extra income through tutoring. This is not just a place for you to impart knowledge, but also a chance for you to develop your skills, expand your network, and better prepare for your future career. We are committed to creating a friendly learning and teaching environment where every individual is respected and encouraged to maximize their potential. Join us in building a strong learning community and spreading knowledge to everyone. Join us today and start your journey!`
                )
              )}
            </Typography>
          </Typography>
          <div className='flex gap-4'>
            <Link to='#'>
              <Button
                className='bg-primary'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t('join us'))}
              </Button>
            </Link>
            <Link to='#'>
              <Button
                variant='outlined'
                className='border-primary text-primary'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t('donate'))}
              </Button>
            </Link>
          </div>
          <hr className='w-full bg-gray-600 text-gray-600 my-4' />
          <Typography
            variant='lead'
            className='text-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(`have any question`))}?
            <Typography
              variant='lead'
              className='text-primary'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t(`contact us`))}!
            </Typography>
            <Typography
              variant='h2'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('(+84) 862236759')}
            </Typography>
          </Typography>
        </div>
      </section>
      <section
        id='sub'
        className='flex flex-col md:flex-row-reverse justify-center bg-primary-light gap-4 xs:px-12 md:px-24 py-8'
      >
        <div id='text' className='basis-1/2'>
          <Typography
            variant='h5'
            className='uppercase'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t(`our mission`))}
          </Typography>
          <Typography
            variant='h1'
            className='text-primary uppercase'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >{`edu connect`}</Typography>
          <Typography
            variant='paragraph'
            className=''
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(
              t(
                `Our mission is to build an educational platform where knowledge is widely spread and shared. We aim to create opportunities for students who do not have part-time jobs or clear degrees but possess the skills and passion for teaching. By assessing and recognizing their abilities, we help them earn additional income, develop themselves, and better prepare for their future. We believe that everyone has the potential to become an excellent tutor, and through teaching, they not only impart knowledge but also learn and develop essential soft skills. Our mission is to foster a sustainable learning community where every member is supported and encouraged to maximize their potential. Join us in spreading knowledge and building a brighter future for everyone!`
              )
            )}
          </Typography>
          <Link to='#'>
            <Button
              className='bg-primary mt-8'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t(`see more`))}
            </Button>
          </Link>
        </div>
        <div className='basis-1/2 aspect-video'>
          <img src={wt} className='aspect-video rounded-2xl shadow-2xl' />
        </div>
      </section>
    </>
  );
}
