//Logic
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

//Layout
import DefaultLayout  from '../components/layout/defaultLayout';
import NoFooterLayout from '../components/layout/noFooterLayout';
import NotHandleYet   from '../pages/error/notHandleYet';

//Page
import About          from '../pages/about';
import Course         from '../pages/course/course';
import Courses        from '../pages/course/courses';
import Dashboard      from '../pages/user/admin/dashboard';
import NotFound       from '../pages/error/notFound';
import Home           from '../pages/home';
import Landing        from '../pages/landing';
import Login          from '../pages/secure/login';
import Profile        from '../pages/user/profile';
import Search         from '../pages/search';
import Signup         from '../pages/secure/signup';
// import User           from '../pages/user/user';
import Users          from '../pages/user/users';
import Setting        from '../pages/user/setting';
import CreateCourse   from '../pages/course/create.course';
import EditCourse     from '../pages/course/edit.course';

/**
 * all route in system
 */
const routes = createBrowserRouter([
  {
    path        : '',
    element     : <DefaultLayout />,
    errorElement: <NotFound      />,
    children : [
      { index: true     , element: <Home            /> },
      { path : 'home'   , element: <Navigate to='/' /> },
      { path : 'about'  , element: <About           /> },
      { path : 'courses', element: <Courses         /> },
      { path : 'search' , element: <Search          /> },
      { path : 'landing', element: <Landing         /> },
      {
        path     : 'user',
        children : [
          { index: true         , element: <Navigate to='/' /> }, //work around error page
          {
            path     : ':id',
            children : [
              { index: true           , element: <Navigate to='./profile' /> },
              { path : 'profile'      , element: <Profile                 /> },
              { path : 'history'      , element: <NotHandleYet            /> }, //các khóa học đã học/dạy
              { path : 'learn-request', element: <NotHandleYet            /> }, //đăng ký học, đợi accept
              { path : 'teach-request', element: <NotHandleYet            /> }, //đăng ký dạy, đợi accept
            ],
          },
          { path : 'setting'    , element: <Setting         /> },
          { path : 'deposit'    , element: <NotHandleYet    /> }, //nạp tiền vào tài khoản
          { path : 'withdraw'   , element: <NotHandleYet    /> }, //rút tiền về bank/ví điện tử
          { path : 'checkout'   , element: <NotHandleYet    /> }, //rút tiền về bank/ví điện tử
        ],
      },
      {
        path     : 'course',
        children : [
          { index: true         , element: <Navigate to='/' /> }, //work around error page
          {
            path     : ':course_id',
            children : [
              { index: true           , element: <Course                  /> },
              { path : 'edit'         , element: <EditCourse              /> },
              { path : 'report'       , element: <NotHandleYet            /> }, //báo cáo về khóa học (ex: video, rating,...)
              { path : 'request'      , element: <NotHandleYet            /> }, //đăng ký học, góc nhìn tutor
              { path : 'participants' , element: <NotHandleYet            /> }, //người đã tham gia khóa học
              { path : '*'            , element: <Course                  /> }, //người đã tham gia khóa học
            ],
          },
          { path : 'create'     , element: <CreateCourse    /> },
        ],
      },
    ],
  },
  {
    path     : '',
    element  : <NoFooterLayout    />,
    children : [
      {
        path     : 'message',
        children : [
          { index: true         , element: <NotHandleYet    /> },
          { path : ':message_id', element: <NotHandleYet    /> },
        ],
      },
      {
        path     : 'admin',
        children : [
          { path : 'dashboard'  , element: <Dashboard       /> },
          { path : 'users'      , element: <Users           /> },
        ],
      },
      { path : 'error'  , element: <NotFound        /> },
      { path : '*'      , element: <NotFound        /> },
    ],
  },
  { path: 'login'          , element: <Login        /> },
  { path: 'signup'         , element: <Signup       /> },
  { path: 'forgot-password', element: <NotHandleYet /> },
  { path: 'reset-password' , element: <NotHandleYet /> },
]);

/**
 * component to handle all release routes
 * @returns JSX.Element
 */
export default function AppRouter() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}