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
      <section id='main' className='container flex flex-col md:flex-row justify-center gap-6'>
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
              {capitalize(`
                Nisi aliqua dolore nisi ad velit pariatur ex anim exercitation. Aliquip ut deserunt incididunt ipsum nisi eiusmod sit. Deserunt laboris elit ut reprehenderit proident ullamco laborum enim non magna enim. Tempor Lorem qui voluptate velit ea irure laboris. Sit fugiat dolor id veniam est nisi. Anim ullamco adipisicing cupidatat sint minim anim cillum voluptate minim elit commodo.

                Esse sunt ut incididunt consequat irure reprehenderit. Ea sint ex in cillum ut irure consequat. Velit nulla laborum voluptate sunt. Dolor et nostrud non qui. Deserunt sit culpa exercitation est aliquip id ea est non enim proident id mollit.
              `)}
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
                {capitalize(t('join'))}
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
            {t(`about us`)}
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
              t(`Do elit laborum ea do pariatur aute laborum dolor do non do. Sunt nulla officia dolore minim ipsum dolore aliqua aliquip ut laboris occaecat. Irure labore esse occaecat fugiat amet dolor eiusmod amet id occaecat do labore. Magna mollit culpa officia duis ad minim et.

Magna deserunt culpa cillum dolor aliqua. Excepteur laboris fugiat fugiat minim aliqua est aliqua qui aute. Sint laboris in cupidatat ex reprehenderit esse esse irure in pariatur culpa qui. Occaecat laboris aliquip consectetur exercitation.`)
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
