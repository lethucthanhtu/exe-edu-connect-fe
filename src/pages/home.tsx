import LanguageButton from '../components/languageButton';
/**
 * home page
 * @returns JSX.Element
 */
export default function Home() {
    return (
        <>
            <LanguageButton />
            <div className='flex justify-center'>
                <span className='text-6xl capitalize'>Home</span>
            </div>
        </>
    );
}
