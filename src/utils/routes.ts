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
    { name: 'home'      , path: '/'         , component: Home       },
    { name: 'home_'     , path: '/home'     , component: Home       },
    { name: 'landing'   , path: '/landing'  , component: Landing    },
    { name: 'login'     , path: '/login'    , component: Login      },
    { name: 'signup'    , path: '/signup'   , component: Signup     },
    { name: 'course'    , path: '/course'   , component: Course     },
    { name: 'courses'   , path: '/courses'  , component: Courses    },
    { name: 'about'     , path: '/about'    , component: About      },
    { name: 'user'      , path: '/user'     , component: User       },
    { name: 'dashboard' , path: '/dashboard', component: Dashboard  },
    { name: 'search'    , path: '/search'   , component: Search     },
    { name: 'error'     , path: '*'         , component: Error      },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
