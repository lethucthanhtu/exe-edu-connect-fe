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
          'course price': 'giá tiền môn học',
          'are you looking for an online tutor?':
            'bạn có đang tìm kiếm gia sư trực tuyến không?',
          'Online tutoring is an effective and convenient learning method, bringing many benefits to students in the digital age. Online tutoring is emerging as an effective and convenient learning solution in the digital age. This form brings many outstanding advantages compared to traditional learning methods, meeting the diverse learning needs of students of all ages and levels.':
            'Gia sư trực tuyến là một phương pháp học tập hiệu quả và tiện lợi, mang đến nhiều lợi ích cho học sinh trong thời đại công nghệ số. Gia sư trực tuyến đang nổi lên như một giải pháp học tập hiệu quả và tiện lợi trong thời đại công nghệ số. Hình thức này mang đến nhiều ưu điểm vượt trội so với phương pháp học truyền thống, đáp ứng nhu cầu học tập đa dạng của học sinh ở mọi lứa tuổi và trình độ.',
          'student quality is guaranteed': 'chất lượng học viên được đảm bảo',
          'The quality of students participating in the course will be guaranteed in a reputable way. Commitment that after participating in courses, students will achieve better learning results.':
            'Chất lượng học sinh tham gia khóa học sẽ được đảm bảo một cách uy tín. Cam kết sau thời gian tham gia các khóa học, học sinh sẽ gặt hái được các kết quả học tập tốt hơn',
          'join our dynamic community to stay up to date with news and opportunities':
            'tham gia cộng đồng năng động của chúng tôi để luôn cập nhật tin tức và cơ hội',
          'find out what our students have to say about their learning experience':
            'tìm hiểu xem học viên của chúng tôi nói gì về trải nghiệm học tập của họ',
          'join now': 'tham gia ngay',
          'main courses': 'các khóa học chính',
          'complete the payment ': 'hoàn tất thanh toán',
          'Almost done, give us few minutes to check your translation.':
            'Gần xong rồi, đợi chúng tôi vài phút để kiểm tra giao dịch nhé.',
          'In that time, you can continue discover other lesson u prefer':
            'Trong thời gian chờ đợi, bạn có thể tiếp tục khám phá các bài học khác mà bạn thích.',
          'about the course': 'giới thiệu khóa học',
          checkout: 'thanh toán',
          'create course': 'tạo khóa học',
          'your course': 'các khóa học của bạn',
          'about us': 'về chúng tôi',
          'welcome to our tutoring website - a dedicated platform for students who wish to share their knowledge and help others. We understand that many students possess the skills and knowledge but have not had the opportunity to prove themselves in the job market. Here, you dont need to have a clear degree; what matters is that your abilities have been evaluated and recognized by our production team. Our website offers opportunities for students who want to earn extra income through tutoring. This is not just a place for you to impart knowledge, but also a chance for you to develop your skills, expand your network, and better prepare for your future career. We are committed to creating a friendly learning and teaching environment where every individual is respected and encouraged to maximize their potential. Join us in building a strong learning community and spreading knowledge to everyone. Join us today and start your journey!': 'Chào mừng bạn đến với trang web dạy gia sư của chúng tôi - một nền tảng dành riêng cho các sinh viên có mong muốn lan tỏa kiến thức và giúp đỡ những người khác. Chúng tôi hiểu rằng nhiều sinh viên có năng lực và kiến thức nhưng chưa có cơ hội để chứng tỏ mình trong thị trường lao động. Với chúng tôi, bạn không cần phải có bằng cấp rõ ràng, điều quan trọng là năng lực của bạn đã được đánh giá và công nhận bởi nhóm sản xuất của chúng tôi. Trang web của chúng tôi mang đến cơ hội cho các sinh viên muốn kiếm thêm thu nhập thông qua việc dạy kèm. Đây không chỉ là nơi để bạn truyền đạt kiến thức mà còn là cơ hội để bạn phát triển kỹ năng, mở rộng mạng lưới quan hệ và chuẩn bị tốt hơn cho tương lai nghề nghiệp. Chúng tôi cam kết tạo ra một môi trường học tập và giảng dạy thân thiện, nơi mà mỗi cá nhân đều được tôn trọng và khuyến khích phát huy tối đa khả năng của mình. Hãy cùng chúng tôi xây dựng một cộng đồng học tập vững mạnh và lan tỏa tri thức đến mọi người. Tham gia với chúng tôi ngay hôm nay và bắt đầu hành trình của bạn',
          'join us': 'tham gia cùng chúng tôi',
          'have any question': 'nếu bạn có bất kì thắc mắc nào',
          'contact us': 'liên hệ với chúng tôi',
          'our mission': 'sứ mệnh chúng tôi mang lại',
          'Our mission is to build an educational platform where knowledge is widely spread and shared. We aim to create opportunities for students who do not have part-time jobs or clear degrees but possess the skills and passion for teaching. By assessing and recognizing their abilities, we help them earn additional income, develop themselves, and better prepare for their future. We believe that everyone has the potential to become an excellent tutor, and through teaching, they not only impart knowledge but also learn and develop essential soft skills. Our mission is to foster a sustainable learning community where every member is supported and encouraged to maximize their potential. Join us in spreading knowledge and building a brighter future for everyone!': 'Sứ mệnh của chúng tôi là xây dựng một nền tảng giáo dục nơi mà kiến thức được lan tỏa và chia sẻ một cách rộng rãi. Chúng tôi mong muốn tạo ra cơ hội cho các sinh viên chưa có việc làm thêm và chưa có bằng cấp rõ ràng nhưng sở hữu năng lực và đam mê giảng dạy. Bằng cách đánh giá và công nhận những kỹ năng của họ, chúng tôi giúp họ có thể kiếm thêm thu nhập, phát triển bản thân và chuẩn bị tốt hơn cho tương lai. Chúng tôi tin rằng mỗi người đều có tiềm năng để trở thành một người dạy kèm tuyệt vời, và qua việc giảng dạy, họ không chỉ truyền đạt kiến thức mà còn học hỏi và phát triển các kỹ năng mềm quan trọng. Sứ mệnh của chúng tôi là thúc đẩy một cộng đồng học tập bền vững, nơi mà mỗi thành viên đều được hỗ trợ và khuyến khích để phát huy tối đa khả năng của mình. Hãy cùng chúng tôi lan tỏa tri thức và xây dựng một tương lai tươi sáng hơn cho tất cả mọi người!'
        },
        jp: {
          translation: {
            greeting: 'jp test',
          },
        },
      },
    },
    // supportedLngs: ['vi', 'en', 'jp'],
  });

export const LANGUAGES = i18n.languages;
