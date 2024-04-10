import React from 'react';
import Footer from '../footer';
import Header from '../header';

export default function DefaultLayout({ children }) {
    return (
        <>

            <Header />
            {children}
            {/* {React.Children.toArray(children)} */}
            <Footer />
        </>
    );
}
