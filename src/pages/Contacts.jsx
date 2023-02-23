import Sun from "./assets/sun_moon.jpeg"
import Home from "./assets/home-button.png"
import "./contact.scss"
import {NavLink as Link} from "react-router-dom"
import React, {useState, useEffect} from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contacts = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark');
        }
    };
    useEffect(()=> {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className="contacts">
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
            <div className="contactContainer">
                <div className="contactDiv">
                    <h2>Please contact me using the following:</h2>
                    <div className="itemContainer">
            <a href="/">
              <AccountBoxIcon className="icon"/>
              <span>+1 480 745 0146</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="mailto:michaelphan35@gmail.com">
            <ContactMailIcon className="icon"/>
            <span>michaelphan35@gmail.com</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://twitter.com/Michael70506728" target="_blank" rel="noreferrer">
              <TwitterIcon className="icon"/>
              <span>@Michael70506728</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.instagram.com/asiaticphan/" target="_blank" rel="noreferrer">
              <InstagramIcon className="icon"/>
              <span>@asiaticphan</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/michael-phan-b61903aa/" target="_blank" rel="noreferrer">
              <LinkedInIcon className="icon"/>
              <span>Michael Phan</span>
            </a>
          </div>
                </div>

      </div>
    </div>
    )
}

export default Contacts