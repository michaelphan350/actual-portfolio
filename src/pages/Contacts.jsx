import Sun from "./assets/sun_moon.jpeg"
import Home from "./assets/home-button.png"
import "./contact.scss"
import {NavLink as Link} from "react-router-dom"
import React, {useState, useEffect} from "react";

const Contacts = () => {
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
        <div className={`contacts ${theme}`}>
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
                    </Link></div>
                <h1>Contacts and Socials:</h1>
                <div className="menuLinks">
                    <ul>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                        <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contacts