import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import { StaticRouter as Router } from 'react-router-dom/server';

interface IRenderProps {
    path: string;
}

export const render = ({ path }: IRenderProps) => {
    return ReactDOMServer.renderToString(
        <ThemeProvider>
            <Router location={path}>
                <App />
            </Router>
        </ThemeProvider>
    );
};

// export function render() {
//   const html = ReactDOMServer.renderToString(
//     <React.StrictMode>
//         <ThemeProvider>
//             <Router location={'/'}>
//                 <App />
//             </Router>
//         </ThemeProvider>
//     </React.StrictMode>
//   )
//   return { html }
// }
