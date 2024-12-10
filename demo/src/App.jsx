import React from 'react';
import AboutMe from '../../src/components/AboutMe.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../../src/components/Footer.jsx';
import { BrowserRouter } from 'react-router-dom'
function App() {
    return (
        <>
            <BrowserRouter>
            <Outlet />
            < Footer />
            </BrowserRouter>
        </>
    );
}
export default App;