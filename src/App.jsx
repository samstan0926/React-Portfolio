import React from 'react';
import AboutMe from './components/AboutMe';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'
function App() {
    return (
        <>
        <BrowserRouter>
            <AboutMe />
            <Outlet />
        </BrowserRouter>

        </>
    );
}
export default App;