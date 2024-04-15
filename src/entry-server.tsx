import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ThemeProvider } from '@material-tailwind/react';

import App from './App';
import './index.css';
import './i18n/i18n';

export function render() {
    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
    return { html };
}
