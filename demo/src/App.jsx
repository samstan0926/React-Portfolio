import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../src/components/Footer.jsx';
import Header from '../../src/components/Header.jsx';

function App() {
    return (
        <>
            < Header />
            <Outlet />
            < Footer />
        </>
    );
}
export default App;