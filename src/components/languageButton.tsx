import { useTranslation } from 'react-i18next';
// import { useCountries } from 'use-react-countries';
import { Select, Option } from '@material-tailwind/react';

export default function LanguageButton() {
    const { i18n } = useTranslation();
    // const { countries } = useCountries();
    const LANGUAGES = [
        { label: 'English', code: 'en' },
        { label: 'Japanese', code: 'jp' },
        { label: 'Vietnamese', code: 'vn' },
    ];

    return (
        <>
            <div className='w-16'>
                <Select
                    label='Language'
                    value={i18n.language}
                    onChange={(lang_code) => i18n.changeLanguage(lang_code)}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    {LANGUAGES.map(({ code, label }) => (
                        <Option key={code} value={code}>
                            {label}
                        </Option>
                    ))}
                </Select>
            </div>
        </>
    );
}
