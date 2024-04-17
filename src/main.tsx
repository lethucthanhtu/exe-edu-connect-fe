import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';

import App from './App';
import './index.css';
import './i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
