import LanguageButton from '../components/languageButton';

/**
 * landing page
 * @returns JSX.Element
 */
export default function Landing() {
    return (
        <>
            <LanguageButton />
            <div className='flex justify-center'>
                <span className='text-6xl capitalize'>Landing</span>
            </div>
        </>
    );
}
