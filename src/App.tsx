import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layout/defaultLayout';
import { publicRoutes } from './utils/routes';

export default function App() {
    return (
        <>
            {/* <DefaultLayout>
                <LanguageButton />
                <div className='h-screen'></div>
            </DefaultLayout> */}

            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    Layout ? (
                                        <>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </>
                                    ) : (
                                        <Page />
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </>
    );
}
