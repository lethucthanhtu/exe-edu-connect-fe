import {
  Button,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Textarea,
  Typography,
} from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import human from '../assets/img/human_blob.svg';
import banner from '../assets/img/about_banner.png';
import learner1 from '../assets/img/about_learner_1.png';
import question from '../assets/img/about_question.png';
import { capitalize } from '../utils/utils';
import { Link } from 'react-router-dom';
import { InputEmail } from '../components/input';

type TResetButtonProps = {
  className?: string;
};

/** */
function ResetButton({ className }: TResetButtonProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='outlined'
        className={className}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Reset
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <DialogHeader
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Bạn có chắc muốn tiếp tục?
        </DialogHeader>
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Bạn sẽ không thể hoàn tác nếu bấm xác nhận
        </DialogBody>
        <DialogFooter
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Cancel</span>
          </Button>
          <Button
            className='bg-primary'
            onClick={handleOpen}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

/**
 * about page
 * @returns JSX.Element
 */
export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <figure className='relative h-1/3 w-full shadow-lg'>
        <img
          className='size-full rounded-xl object-cover object-center'
          src={banner}
          alt='nature image'
        />
        <figcaption className='absolute bottom-8 left-1/2 w-full -translate-x-1/2 rounded-xl px-6 py-4 saturate-100'>
          <div className='mx-auto md:flex md:justify-center gap-4'>
            <div className='flex justify-center'>
              <span className='rounded-full lg:size-32 sm:size-8 bg-white/50 saturate-200 backdrop-blur-sm' />
            </div>
            <div className='basis-3/5'>
              <Typography
                className='text-white'
                variant='h5'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t('Our story'))}
              </Typography>
              <div className='flex gap-4 my-2'>
                <Chip value='Giáo dục' className='bg-primary normal-case' />
                <Chip value='Đam mê' className='bg-primary normal-case' />
              </div>
              <Typography
                className='text-white w-auto sm:line-clamp-2 md:line-clamp-4 px-2 py-1 rounded-md bg-white/20 backdrop-blur-md'
                variant='paragraph'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Hầu hết học sinh cấp 2 và cấp 3 gặp khó khăn trong việc tìm gia
                sư phù hợp và giá cả phải chăng. Các tài liệu trực tuyến và các
                khóa học kiếm tiền không thể giải thích rõ các chủ đề hoặc đáp
                ứng được ưu và nhược điểm của từng học sinh. Nhu cầu về một nền
                tảng kết nối cả gia sư và sinh viên đại học một cách dễ dàng.
              </Typography>
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <Link to='/contact'>
                <Button
                  className='w-full bg-primary'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {capitalize(t('contact us'))}
                </Button>
              </Link>
              <Link to='/course'>
                <Button
                  className='w-full'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {capitalize(t('view courses'))}
                </Button>
              </Link>
            </div>
          </div>
        </figcaption>
      </figure>
      <section className='md:flex md:justify-center md:flex-row-reverse'>
        <img src={human} className='' />
        <div className='flex flex-col justify-center md:items-start xs:justify-center md:w-1/2 xs:w-auto text-primary'>
          <Typography
            variant='h2'
            className='uppercase'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Nhiệm vụ của chúng tôi
          </Typography>
          <ul className='ml-4'>
            <li className='list-disc'>
              <Typography
                as='li'
                variant='paragraph'
                className=''
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Dự án cung cấp nền tảng cho sinh viên cao đẳng/đại học tìm việc
                làm gia sư bán thời gian và giúp học sinh trung học
              </Typography>
            </li>
            <li className='list-disc'>
              <Typography
                as='li'
                variant='paragraph'
                className=''
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Tìm được gia sư giỏi với chi phí thấp.
              </Typography>
            </li>
            <Typography
              as='li'
              variant='paragraph'
              className='font-medium'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Dự án nhằm mục đích:
            </Typography>
            <ul className='ml-8'>
              <li className='list-disc'>
                <Typography
                  as='li'
                  variant='paragraph'
                  className=''
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Cung cấp cho sinh viên cao đẳng/đại học cơ hội kiếm tiền và
                  tích lũy kinh nghiệm.
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  as='li'
                  variant='paragraph'
                  className=''
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Giúp học sinh phát triển kỹ năng và kiến thức.
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  as='li'
                  variant='paragraph'
                  className=''
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Hỗ trợ học sinh trung học trong học tập
                </Typography>
              </li>
            </ul>
          </ul>
        </div>
      </section>
      <section className='md:flex md:justify-center md:gap-16 bg-primary-sub h-auto w-full py-8 rounded-tl-[5rem] rounded-br-[10rem] text-white'>
        <img
          src={learner1}
          className='md:h-full aspect-video w-1/3 rounded-2xl object-cover object-center'
        />
        <div className='flex flex-col justify-center items-start basis-2/5'>
          <Typography
            variant='h2'
            className='uppercase'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Tầm nhìn của chúng tôi
          </Typography>
          <ul className='ml-4'>
            <li className='list-disc'>
              <Typography
                as='li'
                variant='paragraph'
                className=''
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Để tạo ra một cộng đồng nơi sinh viên có thể kết nối với nhau và
                tìm cơ hội thành công.
              </Typography>
            </li>
            <Typography
              variant='paragraph'
              className='font-medium'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Dự án nhằm mục đích:
            </Typography>
            <ul className='ml-8'>
              <li className='list-disc'>
                <Typography
                  as='li'
                  variant='paragraph'
                  className=''
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Hãy là một nền tảng đáng tin cậy cho sinh viên + gia sư.
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  as='li'
                  variant='paragraph'
                  className=''
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Là công cụ quý giá cho cả học sinh trung học và sinh viên cao
                  đẳng/đại học để phát triển kỹ năng và kiến thức.
                </Typography>
              </li>
              <li className='list-disc'>
                <Typography
                  as='li'
                  variant='paragraph'
                  className=''
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Hãy là lực lượng tích cực, mang lại lợi ích cho xã hội
                </Typography>
              </li>
            </ul>
          </ul>
        </div>
      </section>
      <div className='my-16' />
      <section className='w-full h-auto py-10 md:flex md:justify-center gap-8 bg-primary-sub rounded-tr-[10rem] text-white'>
        <div className='flex flex-col gap-6 xs:w-auto md:!w-2/5 justify-center items-start'>
          <Typography
            variant='h2'
            className=''
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('contact us'))}
          </Typography>
          <Typography
            variant='paragraph'
            className='text-black font-normal'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('Have question? Contact us.'), false)}
          </Typography>
          <form className='w-full flex flex-col gap-6'>
            <Textarea
              className='bg-white'
              label={capitalize(t('yours question'))}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <InputEmail name='email' className='bg-white' />
            <div className='flex gap-2'>
              <ResetButton className='w-1/5 border-primary text-primary' />
              <Button
                className='w-1/5 bg-primary'
                type='submit'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {capitalize(t('send'))}
              </Button>
            </div>
          </form>
        </div>
        <img src={question} className='aspect-video w-1/3 rounded-2xl' />
      </section>
    </>
  );
}
