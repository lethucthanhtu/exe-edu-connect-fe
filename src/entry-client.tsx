import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react';
import { StaticRouter as Router } from 'react-router-dom/server';

import App from './App'
import './index.css';
import './i18n.js';

ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
        <ThemeProvider>
            <Router location={'/'}>
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
