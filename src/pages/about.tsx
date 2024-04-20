import { useTranslation } from 'react-i18next';

/**
 * about page
 * @returns JSX.Element
 */
export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <div className='flex justify-center'>
                <span className='text-6xl capitalize'>{t('about')}</span>
            </div>
        </>
    );
}
