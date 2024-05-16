import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // debug: true,
        lng: 'vi',
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    greeting: 'hello',
                    about: 'about us',
                    repassword: 're-enter password',
                },
            },
            vi: {
                translation: {
                    greeting: 'xin chào',
                    home: 'trang chủ',
                    courses: 'khóa học',
                    about: 'về chúng tôi',
                    contact: 'liên hệ',
                    'log in': 'đăng nhập',
                    'sign up': 'đăng ký',
                    search: 'tìm kiếm',
                    'Go back to Home': 'Về trang chủ',
                    password: 'mật khẩu',
                    'new password': 'mật khẩu mới',
                    'reenter new password': 'nhập lại mật khẩu mới',
                    repassword: 'Nhập lại mật khẩu',
                    'change password': 'đổi mật khẩu',
                    'forgot password': 'quên mật khẩu',
                    'register new account': 'đăng kí tài khoản',
                    'tutor/student': 'gia sư/học sinh',
                    tutor: 'giảng viên',
                    student: 'học sinh',
                    'your name': 'tên của bạn',
                    'send code': 'gửi mã',
                    'resend code': 'gửi lại mã',
                    continue: 'tiếp tục',
                    'enter OTP code': 'nhập mã OTP',
                    done: 'xong',
                    'your role': 'bạn muốn là',
                },
            },
            jp: {
                translation: {
                    greeting: 'jp test',
                },
            },
    },
    // supportedLngs: ['vi', 'en', 'jp'],
  });

export const LANGUAGES = i18n.languages;
