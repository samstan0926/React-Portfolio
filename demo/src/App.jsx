import React from 'react';
import AboutMe from '../../src/components/AboutMe.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../../src/components/Footer.jsx';
function App() {
    return (
        <>

            <Outlet />
            < Footer />
        </>
    );
}
export default App;