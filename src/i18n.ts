import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // debug: true,
        // debugger: true,
        lng: 'vn',
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    greeting: 'hello',
                    about: 'about us',
                },
            },
            vn: {
                translation: {
                    greeting: 'xin chào',
                    home: 'trang chủ',
                    courses: 'khóa học',
                    about: 'về chúng tôi',
                    contact: 'liên hệ',
                    'log in': 'đăng nhập',
                    'sign up': 'đăng ký',
                    search: 'tim kiếm',
                },
            },
        },
    });
