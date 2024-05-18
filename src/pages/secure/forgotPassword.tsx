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
import { InputEmail, InputPasswordGroupCheck } from '../../components/input';
import { FormHeader } from '../../components/form';

type TFormProps = {
  activeStep: number;
  handleNext?: any;
};

/** */
function FormStep1({ activeStep, handleNext }: TFormProps) {
  const { t } = useTranslation();
  return (
    <>
      <form
        action='#'
        onSubmit={handleNext}
        className={`size-full flex flex-col gap-4 justify-center h-full items-center
                        ${activeStep === 0 ? 'animate-fade-right' : 'hidden'}
                      `}
      >
        <FormHeader label='forgot password' />
        <div className='flex flex-col justify-center items-center w-full gap-1'>
          <div className='flex flex-col gap-6 items-center w-full h-auto'>
            <InputEmail name='email' color='teal' />
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

        <Button
          type='submit'
          className='w-full bg-secondary-midBlue'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {t('continue')}
        </Button>
      </form>
    </>
  );
}

/** */
function FormStep2({ activeStep, handleNext }: TFormProps) {
  const { t } = useTranslation();
  return (
    <>
      <form
        onSubmit={handleNext}
        action='#'
        className={`size-full flex flex-col gap-4 justify-center p-auto items-center
                    ${activeStep === 1 ? 'animate-fade-right' : 'hidden'}
                  `}
      >
        <FormHeader label='forgot password' />
        <div className='flex flex-col gap-4 justify-center items-center w-full'>
          <div className='flex gap-2 items-center w-full h-auto'>
            <InputEmail color='teal' />
            <Button
              className='basis-2/5 w-full text-primary'
              variant='text'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {t('resend code')}
            </Button>
          </div>

          <Typography
            className='w-full flex justify-start italic'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Mã OTP sẽ được gửi trong giây lát
          </Typography>

          <Input
            id=''
            color='teal'
            type='text'
            name='OTP'
            className='w-full'
            label={t('enter OTP code')}
            labelProps={{ className: 'capitalize' }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>
        <Button
          type='submit'
          className='w-full bg-secondary-midBlue'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {t('continue')}
        </Button>
      </form>
    </>
  );
}

/** */
function FormStep3({ activeStep }: TFormProps) {
  const { t } = useTranslation();
  return (
    <>
      <form
        action='#'
        className={`size-full flex flex-col gap-4 justify-center p-auto items-center
                        ${activeStep === 2 ? 'animate-fade-right' : 'hidden'}
                      `}
      >
        <FormHeader label='forgot password' />
        <InputPasswordGroupCheck color='teal' />
        <Link className='w-full mt-12' to='/login'>
          <Button
            className='w-full bg-secondary-midBlue'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('done')}
          </Button>
        </Link>
      </form>
    </>
  );
}

/**
 * sign up page
 * @returns JSX.Element
 */
export default function ForgotPassword() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  // const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <section className='size-full grid grid-rows-6'>
        <div className='w-full row-span-2 flex justify-center items-center py-4 px-8'>
          <Stepper
            className=''
            color='teal'
            activeStep={activeStep}
            activeLineClassName='bg-primary'
            isLastStep={(value) => setIsLastStep(value)}
            // isFirstStep={(value) => setIsFirstStep(value)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {[...Array(3).keys()].map((_, index) => (
              <Step
                className=''
                color='teal'
                activeClassName='bg-primary'
                onClick={() => setActiveStep(index)}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {index + 1}
              </Step>
            ))}
          </Stepper>
        </div>
        <FormStep1 activeStep={activeStep} handleNext={handleNext} />
        <FormStep2 activeStep={activeStep} handleNext={handleNext} />
        <FormStep3 activeStep={activeStep} handleNext={handleNext} />
      </section>
    </>
  );
}
