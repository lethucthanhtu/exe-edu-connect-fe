import { useTranslation } from 'react-i18next';

/**
 * home page
 * @returns JSX.Element
 */
export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex justify-center'>
        <span className='text-6xl capitalize'>{t('home')}</span>
        {/* <div>test git by TienHoang</div> */}
      </div>
    </>
  );
}
