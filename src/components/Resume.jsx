import React, { useState } from 'react';
import Header from './header';
import '../../style.css';
import Footer from './Footer';
const Resume = () => {
    return (
        <div>
            <Header />
            <section>

            <h2 className='header-h1'>Resume</h2>
            <section className='page-section'>
                <div>
            <p>Download my resume <a href='https://www.google.com'>here</a></p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>

            </ul>
            </div>
                </section>

            </section>

        </div>

    );
};

export default Resume;