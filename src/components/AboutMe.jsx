
import React from 'react';
import '../../style.css';
import Header from './Header.jsx';
class AboutMe extends React.Component {

    render() {
        return (
            <section>
                < Header />
                <h2 className='header-h1'>About Me</h2>
                <div id="about-me"className="page-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </section>
        );
    }
}
export default AboutMe;