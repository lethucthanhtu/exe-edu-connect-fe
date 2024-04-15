import DefaultLayout from '../components/layout/defaultLayout';
import About from '../pages/about';
import Course from '../pages/course';
import Courses from '../pages/courses';
import Dashboard from '../pages/dashboard';
import Error from '../pages/error';
import Home from '../pages/home';
import Landing from '../pages/landing';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Search from '../pages/search';
import Signup from '../pages/signup';
import User from '../pages/user';
import Users from '../pages/users';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom';

// export type TRoute = {
//     path: string; // path of page
//     component?: React.ComponentType; // content of page
//     fallback?: React.ComponentType; // when content error or not found
//     layout?: React.ComponentType; // layout of page. default: DefaultLayout
//     title?: string; // title of page
//     children?: TRoute[]; // sub-path of page
// };

// const publicRoutes: TRoute[] = [
//     // { path: '/', component: Landing            },
//     { path: '', component: Home },
//     { path: 'home', component: Home },
//     { path: 'landing', component: Landing },
//     { path: 'login', component: Login },
//     { path: 'signup', component: Signup },
//     { path: 'course', component: Course },
//     { path: 'courses', component: Courses },
//     { path: 'about', component: About },
//     {
//         path: 'user',
//         component: User,
//         fallback: About,
//         children: [
//             {
//                 path: ':id',
//                 component: Signup,
//                 children: [
//                     { path: 'courses', component: Courses },
//                     { path: 'profile', component: User },
//                 ],
//             },
//             { path: 'all', component: Users },
//         ],
//     },
//     { path: 'dashboard', component: Dashboard },
//     { path: 'search', component: Search },
//     { path: '*', component: Error },
// ];

// const privateRoutes = [{}];

// export { publicRoutes, privateRoutes };

// export const router = createBrowserRouter(
//     createRoutesFromElements(<Routes>{myRoutes(publicRoutes)}</Routes>)
// );

// export function myRoutes(routes: TRoute[]) {
//     return routes.map((route) => {
//         const Page = route.component || route.fallback || Error;
//         const Layout = route.layout || DefaultLayout;

//         return (
//             <Route
//                 key={route.path}
//                 path={route.path}
//                 element={
//                     !route.children && (
//                         <Layout>
//                             <Page />
//                         </Layout>
//                     )
//                 }
//             >
//                 <Route
//                     index
//                     element={
//                         <Layout>
//                             <Page />
//                         </Layout>
//                     }
//                 />
//                 {
//                     /*handle child path*/
//                     route.children && myRoutes(route.children)
//                 }
//             </Route>
//         );
//     });
// }

const routes = createBrowserRouter([
    {
        path: '',
        element: <DefaultLayout />,
        errorElement: <Error />,
        children: [
            { index: true        , element: <Home    /> },
            { path : 'home'      , element: <Home    /> },
            { path : 'about'     , element: <About   /> },
            { path : 'courses'   , element: <Courses /> },
            { path : 'search'    , element: <Search  /> },
            {
                path: 'user/:id',
                // element: <User />,
                children: [
                    { index: true     , element: <User    /> },
                    { path : 'profile', element: <Profile /> },
                ],
            },
            { path : 'course/:id', element: <Course  /> },
            { path : '*'         , element: <Error   /> },
        ],
    },
    { path: 'login' , element: <Login/>  },
    { path: 'signup', element: <Signup/> },
    { path: '*'     , element: <Error /> },
]);

export default function AppRouter() {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}
