import "./projects.scss"
import {NavLink as Link} from "react-router-dom"
import React, {useState, useEffect} from "react";

const Projects = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light');
        }
    };
    useEffect(()=> {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="projects">
             <div className="navDiv">
                <div className="toggleBtn"><button className="dayNight" onClick={toggleTheme}>Toggle</button> </div>
                <div className="homeBtn"><Link to="/"><button type="button" id="homeBtn">Home button</button></Link></div>
                <h1>My Projects:</h1>
                <div className="menuLinks">
                    <ul>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                        <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Projects