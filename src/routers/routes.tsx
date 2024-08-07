//Logic
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { useContext }      from 'react';
import { AuthContext }     from '../context/authProvider';

//Layout
import NoFooterLayout      from '../components/layout/noFooterLayout';
import DefaultLayout       from '../components/layout/defaultLayout';
import LoginLayout         from '../components/layout/loginLayout';
import NotHandleYet        from '../pages/error/notHandleYet';

//Page
import About               from '../pages/about';
import Course              from '../pages/course/course';
import Courses             from '../pages/course/courses';
import Dashboard           from '../pages/user/admin/dashboard';
import NotFound            from '../pages/error/notFound';
import Home                from '../pages/home';
import Landing             from '../pages/landing';
import Login               from '../pages/secure/login';
import Profile             from '../pages/user/profile';
import Search              from '../pages/search/search';
import Signup              from '../pages/secure/signup';
import ForgotPassword      from '../pages/secure/forgotPassword';
// import User            from '../pages/user/user';
import Users               from '../pages/user/users';
import Setting             from '../pages/user/setting';
import CreateCourse        from '../pages/course/create.course';
import EditCourse          from '../pages/course/edit.course';
import UserLayout          from '../components/layout/userLayout';
import Schedule            from '../pages/user/schedule';
import Test                from '../pages/test';
import Subjects            from '../pages/subject/subjects';
import ResetPassword       from '../pages/user/resetPassword';
import TransactionsHistory from '../pages/user/transactionHistory';
import Rate                from '../pages/user/student/rate';
import RefundRequest       from '../pages/user/student/refundRequest';
import CoursesHistory      from '../pages/user/courseHistory';
import Checkout            from '../pages/payment/checkout';
import Contact             from '../pages/contact';
import MyProfile           from '../pages/myprofile';
import SignupTeacher       from '../pages/signup_teacher/signup.teacher';
import CompleteCheckout    from '../pages/payment/complete_checkout';
import CourseTable         from '../pages/user/tutor/table.courses';

const PrivateRoutesLayout = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Navigate to='/login' replace />;

  return <Outlet />;
};

/**
 * all route in system
 */
const routes = createBrowserRouter([
  // { path : ''    , element: <Home      /> },
  {
    path    : '',
    element : <DefaultLayout />,
    errorElement: <NotFound  />,
    children: [
      { index: true                     , element: <Home                                      /> },
      { path : 'home'                   , element: <Navigate to='/' replace                   /> },
      { path : 'about'                  , element: <About                                     /> },
      { path : 'contact'                , element: <Contact                                   /> },
      { path : 'search'                 , element: <Search                                    /> },
      { path : 'landing'                , element: <Landing                                   /> },
      { path : 'checkout'               , element: <Checkout                                  /> },
      { path : 'complete-checkout'      , element: <CompleteCheckout                                  /> },
      {
        path     : 'course',
        children : [
          { index: true         , element: <Navigate to='all' replace /> }, //work around error page
          { path : 'all'        , element: <Courses                   /> },
          {
            path     : ':id',
            children : [
              { index: true                 , element: <Course                                        /> },
              { path : 'edit'               , element: <EditCourse                                    /> },
              { path : 'report'             , element: <NotHandleYet                                  /> }, //báo cáo về khóa học (ex: video, rating,...)
              { path : 'request'            , element: <NotHandleYet                                  /> }, //đăng ký học, góc nhìn tutor
              { path : 'participants'       , element: <NotHandleYet                                  /> }, //người đã tham gia khóa học
              { path : '*'                  , element: <Course                                        /> }, //người đã tham gia khóa học
            ],
          },
          { path : 'create'     , element: <CreateCourse              /> },
        ],
      },
      {
        path     : 'subject',
        children : [
          { index: true         , element: <Navigate to='all' replace /> }, //work around error page
          { path : 'all'        , element: <Subjects                  /> },
          {
            path     : ':subject',
            children : [
              { index: true                 , element: <Navigate to='courses' replace                 /> },
              { path : 'courses'            , element: <Courses                                       /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path    : '',
    element : <NoFooterLayout />,
    children: [
      {
        path     : 'message',
        children : [
          { index: true         , element: <NotHandleYet              /> },
          { path : ':message_id', element: <NotHandleYet              /> },
        ],
      },
      {
        path     : 'admin',
        children : [
          { path : 'dashboard'  , element: <Dashboard                 /> },
          { path : 'users'      , element: <Users                     /> },
        ],
      },
      {
        path     : 'user',
        element  : <UserLayout />,
        children : [
          { index: true         , element: <Navigate to='/' replace   /> }, //work around error page
          {
            path     : ':id',
            children : [
              { index: true                 , element: <Navigate to='./profile' replace               /> },
              { path : 'profile'            , element: <Profile                                       /> },
              { path : 'transactionshistory', element: <Navigate to='../history/transactions' replace /> },
              { path : 'courseshistory'     , element: <Navigate to='../history/courses' replace      /> },
              {
                path     : 'history',
                children : [
                  { index: true          , element: <Navigate to='./courses' replace /> },
                  { path : 'transactions', element: <TransactionsHistory             /> },
                  { path : 'courses'     , element: <CoursesHistory                  /> },
                ]
              },
              { path : 'schedule'           , element: <Schedule                        /> },
              { path : 'tutor/courses'      , element: <CourseTable                     /> },
              { path : 'learn-request'      , element: <NotHandleYet                    /> }, //đăng ký học, đợi accept
              { path : 'teach-request'      , element: <NotHandleYet                    /> }, //đăng ký dạy, đợi accept
              { path : 'rate'               , element: <Rate                            /> },
              { path : 'refundrequest'      , element: <RefundRequest                   /> },
              { path : 'resetpassword'      , element: <ResetPassword                   /> },
            ],
          },
          { path : 'setting'    , element: <Setting                   /> },
          { path : 'deposit'    , element: <NotHandleYet              /> }, //nạp tiền vào tài khoản
          { path : 'withdraw'   , element: <NotHandleYet              /> }, //rút tiền về bank/ví điện tử
          { path : 'checkout'   , element: <NotHandleYet              /> }, //rút tiền về bank/ví điện tử
        ],
      },
      { path : 'my-profile'    , element: <MyProfile                                 /> },
      { path : 'error'         , element: <NotFound                                  /> },
      { path : 'test'          , element: <Test                                      /> },
      { path : '*'             , element: <NotFound                                  /> },
    ],
  },
  {
    path     : '',
    element  : <LoginLayout />,
    children : [
      { path : 'login'         , element: <Login                                     /> },
      { path : 'signup'        , element: <Signup                                    /> },
      { path : 'forgotPassword', element: <ForgotPassword                            /> },
    ],
  },
  {
    path: 'signup/teacher',
    element:<NoFooterLayout/>,
    children: [
      {index:true,element:<SignupTeacher/>}
    ]
  }
]);

/**
 * component to handle all release routes
 * @returns JSX.Element
 */
export default function AppRouter({ className = '' }) {
  return (
    <section className={className}>
      <RouterProvider router={routes} />
    </section>
  );
}
