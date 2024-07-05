import { capitalize, currencyFormat } from '../utils/utils';
import { useTranslation } from 'react-i18next';
import { size } from '@material-tailwind/react/types/components/avatar';
import RatingStar from './ratingStar';
import QRMomoTienHoang from '../assets/img/QRMomoTienHoang/QR_MOMO.jpg';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Avatar,
  Rating,
  IconButton,
  Typography,
  CardHeader,
} from '@material-tailwind/react';
import api from '../api/api';
import { useEffect, useState } from 'react';
import { TUser } from '../entity/user';
import User from '../pages/user/user';
import { TCourse } from '../entity/entity/course';
import { Link } from 'react-router-dom';
import Loading from './loading';

type TCheckoutDetailProps = {
  teacher?: TUser;
  course?: TCourse;
};

/**
 * Checkout Details Section, contains teacher details, description, and customer's details.
 * @returns JSX.Element
 */
export function CheckoutDetails({ teacher, course }: TCheckoutDetailProps) {
  const { t } = useTranslation();

  return (
    <Card
      className='w-96 h-full'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        className=''
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant='h5'
          color='blue-gray'
          className='mb-2 text-center'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(t('Thông tin khóa học đăng ký'))}
        </Typography>
        <div className='mt-5 px-2'>
          <BasicTeacherProfileSection teacher={teacher} />
        </div>
        <div className='mt-5 px-2'>
          <DetailedTeacherProfileSection teacher={teacher} />
        </div>
        <div className='mt-5 px-2'>
          <CourseChoiceSummary course={course} />
        </div>
      </CardBody>
    </Card>
  );
}

/**
 * Checkout Warning Notification.
 * @returns JSX.Element
 */
export function CheckoutWarningNotification() {
  const { t } = useTranslation();
  return (
    <Chip
      className='bg-primary text-center text-sm'
      value={capitalize(
        t(
          'Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên website. Xin cảm ơn! '
        )
      )}
      size='lg'
    />
  );
}
/**
 * Contains a list of payment options.
 * @returns JSX.Element
 */
export function PaymentOptions() {
  const { t } = useTranslation();
  return (
    <Card
      className='w-96'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        className=''
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant='h5'
          color='blue-gray'
          className='mb-2 text-center'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(t('Từ nguồn tiền'))}
        </Typography>
        <BankList />
      </CardBody>
    </Card>
  );
}

/**
 * The QR section for customers to finish the payment.
 * @returns JSX.Element
 */
export function QRSection({ course }: TCheckoutDetailProps) {
  const { t } = useTranslation();

  return (
    <Card
      className='mt-2 w-96'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        className=''
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant='h5'
          color='blue-gray'
          className='mb-2 text-center'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {t('Quét mã QR \n để thanh toán')}
        </Typography>
        <img
          className='h-36 w-36 my-5 mx-auto'
          src={QRMomoTienHoang}
          alt='nature image'
        />
        <Typography
          variant='paragraph'
          color='blue-gray'
          className='mb-1 text-center'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {t('Thanh toán trực tuyến')}
        </Typography>
        <Typography
          variant='h3'
          color='blue-gray'
          className='text-center'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {currencyFormat(course?.price || 0, 'đ', 0, false)}
        </Typography>
        <div className='flex gap-1 justify-center mt-2'>
          <Typography
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Số tài khoản: '))}
          </Typography>
          <Typography
            className='leading-7'
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {'0862 236 759'}
          </Typography>
        </div>
        <div className='flex gap-1 justify-center mt-2'>
          <Typography
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Chủ tài khoản: '))}
          </Typography>
          <Typography
            className='leading-7'
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {'Hoàng Trọng Tiến'}
          </Typography>
        </div>
        <div className='flex gap-1 justify-center mt-2'>
          <Typography
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {`${capitalize(t('message'))}:`}
          </Typography>
          <Typography
            className='leading-7'
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {`Theeduconnect: ${course?.id} - `}
          </Typography>
        </div>
        <hr className='border-gray-300 my-4' />
        <Link to={'/complete-checkout'}>
          <Button
            // onClick={handleClickCheckout}
            className='bg-primary text-center text-sm'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            fullWidth
          >
            {capitalize(t('hoàn tất thanh toán'))}
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
/**
 * The section displaying teacher's information.
 * @returns JSX.Element
 */
function BasicTeacherProfileSection({ teacher }: TCheckoutDetailProps) {
  const { t } = useTranslation();

  return (
    <div className='flex'>
      <Avatar
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        size='xxl'
        src={teacher?.avatarurl}
        alt='avatar'
      />
      <div className='ms-3 mt-1 space-y-3'>
        <div className='flex gap-1'>
          <Typography
            variant='h5'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Gia sư: '))}
          </Typography>
          <Typography
            className='leading-7'
            variant='lead'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {teacher?.fullname}
          </Typography>
        </div>
        <div className='flex gap-1 '>
          <div className='material-symbols-outlined text-yellow-800 select-none leading-7'>
            Star
          </div>
          <Typography
            variant='lead'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {'4.5'}
          </Typography>
        </div>
      </div>
    </div>
  );
}
/**
 * The section displaying teacher's information.
 * @returns JSX.Element
 */
function DetailedTeacherProfileSection({ teacher }: TCheckoutDetailProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className='space-y-3'>
        <div className='flex gap-1'>
          <Typography
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Năm sinh: '))}
          </Typography>
          <Typography
            className='leading-7'
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {teacher?.dateofbirth}
          </Typography>
        </div>
        <div className='flex gap-1'>
          <Typography
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Hiện là: '))}
          </Typography>
          <Typography
            className='leading-7'
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('university student'))}
          </Typography>
        </div>
        <div className='flex gap-1'>
          <Typography
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Trường: '))}
          </Typography>
          <Typography
            className='leading-7'
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('FPT University'), false)}
          </Typography>
        </div>
        <div className='flex gap-1'>
          <Typography
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Chuyên ngành: '))}
          </Typography>
          <Typography
            className='leading-7'
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('software engineering'))}
          </Typography>
        </div>
      </div>
    </>
  );
}
/**
 * The section that shows the options.
 * @returns JSX.Element
 */
function CourseChoiceSummary({ course }: TCheckoutDetailProps) {
  const { t } = useTranslation();
  return (
    <>
      <Typography
        className='leading-7'
        variant='paragraph'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        color='black'
      >
        {'Bạn đã chọn'}
      </Typography>
      <div className='mt-2 space-y-3 '>
        <div className='flex justify-between'>
          <Typography
            className='leading-9'
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Số điện thoại: '))}
          </Typography>
          <Chip
            className='bg-primary text-center text-sm'
            value={'0123 456 789'}
            size='lg'
          />
        </div>
        <div className='flex justify-between'>
          <Typography
            className='leading-9'
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Gói học: '))}
          </Typography>
          <Chip
            className='bg-primary text-center text-sm'
            value={'Theo tháng'}
            size='lg'
          />
        </div>
        <div className='flex justify-between'>
          <Typography
            className='leading-9'
            variant='h6'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'
          >
            {capitalize(t('Thời gian học: '))}
          </Typography>
          <Chip
            className='bg-primary text-center text-sm'
            value={`${course?.startdate} to ${course?.enddate}`}
            size='lg'
          />
        </div>
      </div>
    </>
  );
}
/**
 * Shows up a list of banks.
 * @returns JSX.Element
 */
function BankList() {
  return (
    <div className='flex gap-6'>
      <Button
        size='lg'
        variant='outlined'
        color='blue-gray'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className='flex items-center gap-3'
      >
        <img
          src='https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-BIDV-Transparent.png'
          alt='bidv-logo'
          className='h-6 w-12'
        />
      </Button>
      <Button
        size='lg'
        variant='outlined'
        color='blue-gray'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className='flex items-center gap-3'
      >
        <img
          src='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Circle.png'
          alt='bidv-logo'
          className='h-6 w-12'
        />
      </Button>
      <Button
        size='lg'
        variant='outlined'
        color='blue-gray'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className='flex items-center gap-3'
      >
        <img
          src='https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-Vietcombank.png'
          alt='bidv-logo'
          className='h-6 w-12'
        />
      </Button>
    </div>
  );
}
