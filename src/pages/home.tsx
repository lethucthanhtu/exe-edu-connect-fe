import { useTranslation } from 'react-i18next';
import ComingSoon from './error/comingSoon';

/**
 * home page
 * @returns JSX.Element
 */
export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* <div className='flex justify-center'>
        <span className='text-6xl capitalize'>{t('home')}</span>
      </div> */}
      <ComingSoon />
    </>
  );
}
