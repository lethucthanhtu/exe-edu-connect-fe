import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

/**
 * search page
 * @returns JSX.Element
 */
export default function Search() {
    const [params] = useSearchParams();
    const { t } = useTranslation();
    return (
        <>
            <div className='flex justify-center'>
                <span className='text-6xl capitalize'>
                    {t('Search')} "{params.get('q')}"
                </span>
            </div>
        </>
    );
}
