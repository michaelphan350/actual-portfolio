import Typewriter from "typewriter-effect"
import Placeholderportrait from "./assets/placeholderPortrait.png"
import Sun from "./assets/sun_moon.jpeg"
import Home from "./assets/home-button.png"
import "./about.scss"
import {NavLink as Link} from "react-router-dom"
import React, {useState, useEffect} from "react";

const About = () => {
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
    <div className="aboutContainer">
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
                <h1>About myself:</h1>
                <div className="menuLinks">
                    <ul>
                        <li>
                        <Link to="/projects">Projects</Link>
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
        <div className="lrContainer">
            <div className="left">
                <div className="imgContainer">
                    <img src = {Placeholderportrait} href="" alt="Placeholder for person" id="portrait"/>
                </div>
                <p className="aboutText">I am a 28 year old full-stack web developer. I completed a completed a bootcamp offered through the University of Arizona where we touched on both front and back end development topics such as: Javascript, React, SQL. I'm currently freelancing while continually looking for jobs in order to improve my skillset and experiences.</p>
                <div className="strengthsDiv">
                    <h2>Strengths</h2>
                </div>
                <ul className="strengths">
                    <li>Always striving to learn</li>
                    <li>High attention to detail</li>
                    <li>Team player</li>
                    <li>Highly motivated independent worker</li>
                </ul>
                <div className="hobbiesDiv">
                    <h2>Hobbies</h2>
                </div>
                <ul className="hobbies">
                    <li>Learning new coding systems and languages</li>
                    <li>Creative Writing</li>
                    <li>Working out</li>
                    <li>Piano</li>
                </ul>
            </div>
            <div className="right">
            <span>
                <h1>Hard Skills</h1>
                <ul>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["JavaScript", "HTML", "CSS", "React", "MySql", "MangoDB", "API's", "Node", "MERN"],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["HTML", "CSS", "React", "MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript"],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["CSS", "React", "MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML",],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["React", "MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML", "CSS", ],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["MySql", "MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML", "CSS", "React",],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["MangoDB", "API's", "Node", "MERN", "JavaScript", "HTML", "CSS", "React", "MySql"],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["API's", "Node", "MERN", "JavaScript", "HTML", "CSS", "React", "MySql", "MangoDB"],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                    <li>
                    <Typewriter 
                
                        options={{ 
                        strings:["MERN", "JavaScript", "HTML", "CSS", "React", "MySql", "MangoDB", "API's", "Node"],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }} 
                    /> 
                    </li>
                </ul>
                </span>
            </div>
        </div>
    </div>
    )
}

export default About