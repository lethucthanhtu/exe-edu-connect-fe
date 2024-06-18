

import { size } from '@material-tailwind/react/types/components/avatar';
import { CheckoutWarningNotification, CheckoutDetails, PaymentOptions, QRSection } from '../../components/checkout_child_components';



/**
 * Contains the details of the course to be checked out.
 * @returns JSX.Element
 */

/**
 * checkout page
 * @returns JSX.Element
 */
export default function Checkout() {
  return (
    <>
      <div className='container my-5'>
        <CheckoutWarningNotification />
      </div>
      <div className='container my-10 grid justify-items-center'>
        <div className="flex">
          <div className='me-3'>
            <CheckoutDetails />
          </div>
          <div className='ms-3'>
            <PaymentOptions />
            <QRSection />
          </div>
        </div>
      </div>
    </>
  );
}
