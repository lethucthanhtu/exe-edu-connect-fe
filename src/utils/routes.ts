import DefaultLayout from '../components/layout/defaultLayout';
import About from '../pages/about';
import Course from '../pages/course';
import Courses from '../pages/courses';
import Dashboard from '../pages/dashboard';
import Error from '../pages/error';
import Home from '../pages/home';
import Landing from '../pages/landing';
import Login from '../pages/login';
import Search from '../pages/search';
import Signup from '../pages/signup';
import User from '../pages/user';

const publicRoutes = [
    // { name: '', path: '/', component: Landing },
    { name: 'home'      , path: '/'         , component: Home      , layout: DefaultLayout },
    { name: 'home_'     , path: '/home'     , component: Home      , layout: DefaultLayout },
    { name: 'landing'   , path: '/landing'  , component: Landing   , layout: DefaultLayout },
    { name: 'login'     , path: '/login'    , component: Login     , layout: DefaultLayout },
    { name: 'signup'    , path: '/signup'   , component: Signup    , layout: DefaultLayout },
    { name: 'course'    , path: '/course'   , component: Course    , layout: DefaultLayout },
    { name: 'courses'   , path: '/courses'  , component: Courses   , layout: DefaultLayout },
    { name: 'about'     , path: '/about'    , component: About     , layout: DefaultLayout },
    { name: 'user'      , path: '/user'     , component: User      , layout: DefaultLayout },
    { name: 'dashboard' , path: '/dashboard', component: Dashboard , layout: DefaultLayout },
    { name: 'search'    , path: '/search'   , component: Search    , layout: DefaultLayout },
    { name: 'error'     , path: '*'         , component: Error     , layout: DefaultLayout },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
