import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';

import App from './App';
import './index.css';
import './i18n/i18n';
import { AuthProvider } from './context/authProvider';

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    {/* <AuthProvider>
      </AuthProvider> */}
    <App />
  </ThemeProvider>
);
