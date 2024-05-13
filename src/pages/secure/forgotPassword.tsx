import { useState } from 'react';
import {
  Typography,
  Input,
  Button,
  Stepper,
  Step,
} from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * sign up page
 * @returns JSX.Element
 */
export default function ForgotPassword() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <section className=''>
        <div className='w-full py-4 px-8'>
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Step
              onClick={() => setActiveStep(0)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              1
            </Step>
            <Step
              onClick={() => setActiveStep(1)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              2
            </Step>
            <Step
              onClick={() => setActiveStep(2)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              3
            </Step>
          </Stepper>
        </div>

        <div className={activeStep === 0 ? '' : 'hidden'}>
          <form
            action='#'
            className=' !size-full flex flex-col gap-4 justify-center p-auto items-center '
          >
            <div></div>
            <Typography
              variant='h3'
              color='white'
              className='mb-2 flex justify-center capitalize'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('forgot password')}
            </Typography>

            <div className='flex flex-col justify-center items-center w-full gap-1'>
              <div className='flex flex-col gap-6 items-center w-full h-auto'>
                <Input
                  id='email'
                  color='gray'
                  size='lg'
                  type='email'
                  name='email'
                  placeholder={`${t('Email')}...`}
                  className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
                  labelProps={{
                    className: 'hidden',
                  }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <Typography
                  className=''
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Vui lòng nhập email để nhận mã OTP
                </Typography>
              </div>
            </div>

            <div className='mt-20 flex flex-col w-full gap-4 justify-center '>
              <Button
                className='w-full capitalize text-gray-400 bg-secondary-midBlue'
                onClick={handleNext}
                disabled={isLastStep}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t('continue')}
              </Button>
            </div>
          </form>
        </div>

        <div className={activeStep === 1 ? '' : 'hidden'}>
          <form
            action='#'
            className=' !size-full flex flex-col gap-14 justify-center p-auto items-center '
          >
            <Typography
              variant='h3'
              color='white'
              className='mb-2 flex justify-center capitalize'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('forgot password')}
            </Typography>

            <div className='flex flex-col justify-center items-center w-full'>
              <div className='flex flex-col gap- items-center w-full h-auto'>
                <div className='flex flex-col gap- items-center w-full h-auto'>
                  <Input
                    id='email'
                    color='gray'
                    size='lg'
                    type='email'
                    name='email'
                    placeholder='*******Email đã nhập*******'
                    className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
                    labelProps={{
                      className: 'hidden',
                    }}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />

                  <div className='w-full flex justify-end'>
                    <Button
                      className='w-4/12 '
                      variant='text'
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {t('resend code')}
                    </Button>
                  </div>
                </div>

                <div className='flex flex-col gap-1 items-center w-full h-auto'>
                  <div className='w-full flex justify-start italic'>
                    <Typography
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Mã OTP sẽ được gửi trong giây lát
                    </Typography>
                  </div>

                  <Input
                    id=''
                    color='gray'
                    size='lg'
                    type='text'
                    name='OTP'
                    placeholder={`${t('enter OTP code')}`}
                    className='w-full !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:capitalize placeholder:text-gray-400  '
                    labelProps={{
                      className: 'hidden',
                    }}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full'>
              <Button
                className='w-full text-gray-400 bg-secondary-midBlue'
                onClick={handleNext}
                disabled={isLastStep}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t('continue')}
              </Button>
            </div>
          </form>
        </div>

        <div className={activeStep === 2 ? '' : 'hidden'}>
          <form
            action='#'
            className=' !size-full flex flex-col gap-14 justify-center p-auto items-center '
          >
            <Typography
              variant='h3'
              color='white'
              className='mb-2 flex justify-center capitalize'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('forgot password')}
            </Typography>
            <div className='flex flex-col justify-center items-center w-full gap-4'>
              <Input
                size='lg'
                placeholder={`${t('new password')}`}
                labelProps={{
                  className: 'hidden ',
                }}
                className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
                type={passwordShown ? 'text' : 'password'}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
              <Input
                size='lg'
                placeholder={`${t('reenter new password')}`}
                labelProps={{
                  className: 'hidden ',
                }}
                className='w-full placeholder:capitalize !bg-secondary-darkBlue text-gray-100 placeholder:opacity-100 placeholder:text-gray-400  '
                type={passwordShown ? 'text' : 'password'}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <Link className='w-full' to={'/login'}>
              <Button
                className='w-full text-gray-400 bg-secondary-midBlue'
                variant='text'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {t('done')}
              </Button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
