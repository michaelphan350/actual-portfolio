import TechResume from "./assets/phan.michael.resume.pdf"
import TechSS from "./assets/Tech-resume-ss.png"
import GenResume from "./assets/Resume-Michael.Phan.pdf"
import GenSS from "./assets/General-resume-ss.png"
import Sun from "./assets/sun_moon.jpeg"
import Home from "./assets/home-button.png"
import "./resume.scss"
import {NavLink as Link} from "react-router-dom"
import React, {useState, useEffect} from "react";

const Resume = () => {
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
        <div className="resumeDiv">
            <div className="navDiv">
                <div className="toggleBtn">
                    <button className="dayNight" onClick={toggleTheme}>
                        <img id="toggle" src= {Sun} alt = "moon"></img>
                        </button> 
                </div>
                <div className="homeButton">
                    <Link to="/">
                        <button type="button" id="homeBtn">
                            <img id ="home" src = {Home} alt= "home"></img>
                        </button>
                    </Link>
                </div>
                <h1>My Resume:</h1>
                <div className="menuLinks">
                    <ul>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                        <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="resumeContainer">
                <div className="leftResume">
                    <h3>Web Development Resume</h3>
                    <div className="resume1Container">
                    <a href={TechResume} target="_blank" rel="noreferrer"><img src={TechSS} alt="resume" /></a>
                    </div>
                </div>
                <div className="rightResume">
                    <h3>General Resume</h3>
                    <div className="resume1Container">
                        <a href={GenResume} target="_blank" rel="noreferrer"><img src={GenSS} alt="resume" /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Resume