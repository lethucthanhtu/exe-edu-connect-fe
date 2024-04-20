import { useTranslation } from 'react-i18next';
import { Select, Option } from '@material-tailwind/react';
import { LANGUAGES } from '../i18n/i18n';

/**
 * language switcher component
 * @returns JSX.Element
 */
export default function LanguageButton() {
    const { i18n } = useTranslation();
    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('usrLng', lng);
    };
    const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });

    return (
        <>
            <div className='w-16'>
                <Select
                    label='Language'
                    value={i18n.language}
                    onChange={handleChangeLng}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    {LANGUAGES.map((lng) => (
                        <Option key={lng} value={lng}>
                            {languageNames.of(lng.toUpperCase())}
                        </Option>
                    ))}
                </Select>
            </div>
        </>
    );
}
