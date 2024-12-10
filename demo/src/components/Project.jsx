

import React from 'react';

import '../style.css';

class Project extends React.Component {
    render() {
        return (
            <div>

                <h2 className="header-h1">Projects</h2>
                <div className="page-section">
                    <h2 id="My Projects">Work</h2>
                    <section className="flex-container">
                        <div className="flex-item surf-report">
                            <h3>Surf Report<a href=""></a></h3> 
                        </div>
                        <div className="flex-item run-buddy">
                            <h3>Run Buddy</h3>
                        </div>
                        <div className="flex-item led-wall">
                            <h3>LED Wall</h3>
                        </div>
                        <div className="flex-item react-calc">
                            <h3>React Calc</h3>
                        </div>
                        <div className="flex-item pastel-puzzles">
                            <h3>Pastel Puzzles</h3>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default Project;