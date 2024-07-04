import { Button } from '@material-tailwind/react';
import { Form } from 'react-router-dom';

/**
 * SaleForm
 * @returns
 */
export default function SaleForm() {
  return (
    <>
      <div className='mb-auto'>
        <div className='flex justify-center'>
          <span className='text-6xl capitalize'>SaleForm</span>
        </div>
        <Form
          action='/checkout'
          method='post'
          // onSubmit={(event) => console.log(event)}
          className='flex justify-center gap-4 mt-4'
        >
          <Button
            name='payment-method'
            value='momo'
            type='submit'
            className='capitalize bg-purple-300 hover:shadow-purple-300'
            placeholder='Momo'
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Momo
          </Button>
          <Button
            name='payment-method'
            value='VNPay'
            type='submit'
            className='capitalize'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            VNPay
          </Button>
        </Form>
      </div>
    </>
  );
}

export const handlePaymentAction = async ({ request }) => {
  // console.log(request);

  const data = await request.formData();
  // eslint-disable-next-line no-console
  // console.log(data);

  const submission = {
    'payment-method': data.get('payment-method'),
  };
  // console.log(submission);

  return submission;
};
