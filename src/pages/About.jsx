import Typewriter from "typewriter-effect"
import Placeholderportrait from "./assets/placeholderPortrait.png"
import "./about.scss"
import {NavLink as Link} from "react-router-dom"

const About = () => {
    return (
    <div className="aboutContainer">
            <div className="navDiv">
                <div className="toggleBtn"><button className="dayNight">Toggle</button> </div>
                <div className="homeBtn"><Link to="/"><button type="button" id="homeBtn">Home button</button></Link></div>
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
                <img src = {Placeholderportrait} href="" alt="Placeholder for person" id="portrait"/>
                <p className="aboutText">Placeholder text! WOO IT WORKED</p>
                <ul className="strengths">
                    <li>placeholder</li>
                    <li>placeholder</li>
                    <li>placeholder</li>
                    <li>placeholder</li>
                </ul>
                <ul className="hobbies">
                    <li>placeholder</li>
                    <li>placeholder</li>
                    <li>placeholder</li>
                    <li>placeholder</li>
                </ul>
            </div>
            <div className="right">
            <span>
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