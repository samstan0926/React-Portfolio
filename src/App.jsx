import React from 'react';
import AboutMe from './components/AboutMe';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
    return (
        <>
            <AboutMe />
            <Outlet />

        </>
    );
}
export default App;