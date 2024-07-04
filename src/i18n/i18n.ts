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
          'old password': 'mật khẩu cũ',
          'register new account': 'đăng kí tài khoản',
          'log out': 'đăng xuất',
          'tutor/student': 'gia sư/học sinh',
          tutor: 'giảng viên',
          student: 'học sinh',
          'your name': 'tên của bạn',
          'send code': 'gửi mã',
          'resend code': 'gửi lại mã',
          continue: 'tiếp tục',
          'have account': 'bạn đã có tài khoản',
          or: 'hoặc',
          'enter email to receive OTP code':
            'vui lòng nhập email để nhận mã OTP',
          'remember me': 'lưu đăng nhập',
          'sign in now': 'đăng nhập ngay',
          'enter OTP code': 'nhập mã OTP',
          done: 'xong',
          'your role': 'bạn muốn là',
          'Get in touch with us': 'Liên hệ với chúng tôi',
          '(+84) 862236759': '0862 236 759',
          'FPT University, High-tech Park , District 9, Ho Chi Minh City':
            'Trường Đại Học FPT, Khu công nghệ cao, quận 9, thành phố Hồ Chí Minh',
          language: 'ngôn ngữ',
          'OTP code will be sent shortly': 'Mã OTP sẽ được gửi trong giây lát',
          ballance: 'số dư',
          deposit: 'nạp tiền',
          withdraw: 'rút tiền',
          profile: 'thông tin cá nhân',
          schedule: 'lịch học',
          'teach-schedule': 'lịch dạy',
          'your schedule': 'lịch của bạn',
          'last name': 'họ',
          'first name': 'tên',
          'full name': 'họ và tên',
          'day of birth': 'ngày sinh',
          'phone number': 'số điện thoại',
          address: 'địa chỉ',
          'save change': 'lưu thay đổi',
          history: 'lịch sử',
          transactions: 'giao dịch',
          'transaction history': 'lịch sử giao dịch',
          'course history': 'lịch sử khóa học',
          time: 'thời gian',
          subject: 'môn học',
          'lesson path': 'lộ trình môn học',
          amount: 'số lượng',
          status: 'tình trạng',
          rate: 'đánh giá',
          'refund request': 'yêu cầu hoàn tiền',
          'see more': 'xem thêm',
          'see more courses': 'xem thêm các khóa học',
          'see more tutors': 'khám phá các gia sư khác',
          'trending course': 'khóa học nổi bật',
          'discover our trending courses that suit your needs':
            'Khám phá các khóa học nổi bật của chúng tôi mà bạn có thể cần',
          'outstanding tutors': 'các gia sư nổi bật',
          'Bachelor in English studies, PhD in Linguistics':
            'Cử nhân Sư phạm Anh, Thạc sĩ/Tiến sĩ Ngôn ngữ',
          points: 'đánh giá',
          review: 'phản hồi',
          'student activities': 'hoạt động học sinh',
          'profile updated successfully': 'cập nhật thông tin thành công',
          'failed to update profile': 'không thể cập nhập thông tin',
          'university student': 'sinh viên đại học',
          'FPT University': 'Đại học FPT',
          'software engineering': 'kĩ thuật phần mềm',
          'start date': 'ngày bắt đầu',
          'end date': 'ngày kết thúc',
          message: 'nội dung chuyển khoản', 
          'course price': 'giá tiền môn học'
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
