import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TRoute, createRoutes, publicRoutes } from './routes';

export default function App() {
    return (
        <>
            {/* <Router> */}
            <Routes>{createRoutes(publicRoutes)}</Routes>
            {/* </Router> */}
        </>
    );
}
