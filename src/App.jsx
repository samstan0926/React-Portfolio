import React from 'react';
import AboutMe from './components/AboutMe';
import { Outlet } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom'
function App() {
    return (
        <>

            <AboutMe />
            <Outlet />


        </>
    );
}
export default App;