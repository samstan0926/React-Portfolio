import React from 'react';
import '../../style.css';
import { Link } from 'react-router-dom';
class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link to="/">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Project</Link>
                </ul>
            </nav>
        );
    }
}
export default Navigation;