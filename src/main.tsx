import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import './i18n.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <ThemeProvider>
//             <App />
//         </ThemeProvider>
//     </React.StrictMode>
// );
ReactDOM.hydrate(
    <React.StrictMode>
        <ThemeProvider>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
