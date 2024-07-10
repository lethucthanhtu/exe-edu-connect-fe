import { Typography } from '@material-tailwind/react';
import doneTick from '../../assets/img/QRMomoTienHoang/DoneTick.png';
import Separator from '../../components/separator';
import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';

/**
 *
 */
export default function CompleteCheckout() {
  const { t } = useTranslation();
  return (
    <>
      <div className='w-full h-full flex flex-col items-center pt-10'>
        <div className='w-3/12 mb-10'>
          <img src={doneTick} />
        </div>
        <Typography
          variant='h5'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(
            t('Almost done, give us few minutes to check your translation.')
          )}
        </Typography>
        <Typography
          variant='h5'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {capitalize(
            t('In that time, you can continue discover other lesson u prefer')
          )}
        </Typography>
      </div>
    </>
  );
}
