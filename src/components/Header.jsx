import React from 'react';
import '../../style.css'
import Navigation from './Navigation.jsx';

class Header extends React.Component {
    render() {
    return (

        <header>
            <h1 className='header-h1'>Sam Stanley</h1>
            <section></section>
            <nav>
                <ul>
                <Navigation />
                </ul>
            </nav>
        </header>
    );
}
};

export default Header;