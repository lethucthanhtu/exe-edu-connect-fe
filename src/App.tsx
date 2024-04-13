import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import DefaultLayout from './components/layout/defaultLayout';
import { publicRoutes } from './utils/routes';

export default function App() {
    return (
        <>
            <StaticRouter location='/'>
                {/* <Router> */}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
                {/* </Router> */}
            </StaticRouter>
        </>
    );
}
