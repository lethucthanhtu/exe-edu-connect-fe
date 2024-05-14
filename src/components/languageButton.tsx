import { useTranslation } from 'react-i18next';
import { Select, Option } from '@material-tailwind/react';
import { LANGUAGES } from '../i18n/i18n';

type TLanguageButtonProps = {
  className?: string;
};

/**
 * language switcher component
 * @returns JSX.Element
 */
export default function LanguageButton({ className }: TLanguageButtonProps) {
  const { i18n } = useTranslation();
  const handleChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('usrLng', lng);
  };

  return (
    <>
      <div className={`w-52 rounded-lg ${className}`}>
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
              {new Intl.DisplayNames([lng], {
                type: 'language',
              }).of(lng.toUpperCase())}
            </Option>
          ))}
        </Select>
      </div>
    </>
  );
}
