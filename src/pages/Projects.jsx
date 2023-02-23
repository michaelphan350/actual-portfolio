import Controller from "./assets/imagemap-controller.png"
import Password from "./assets/password-generator.jpg"
import Ecommerce from "./assets/e-commerce-back-end.png"
import Spotify from "./assets/Capture1.JPG"
import SocialAPI from "./assets/social-api.png"
import WebDev from "./assets/web-dev-social.png"
import Sun from "./assets/sun_moon.jpeg"
import Home from "./assets/home-button.png"
import "./projects.scss"
import {NavLink as Link} from "react-router-dom"
import React, {useState, useEffect} from "react";
import Carousel, {CarouselItem} from "./Carousel"

const Projects = () => {
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
        <div className="projects">
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
            <Carousel>
                <CarouselItem>Password Generator</CarouselItem>
                <CarouselItem>Ecommerce Application</CarouselItem>
                <CarouselItem>Spotify React Clone</CarouselItem>
                <CarouselItem>Social API Application</CarouselItem>
                <CarouselItem>WebDev Social Media Application</CarouselItem>
                <CarouselItem>Mern Project</CarouselItem>
                <CarouselItem>Note Tracker</CarouselItem>
                <CarouselItem>Employee Tracker</CarouselItem>
                <CarouselItem>Team Generator</CarouselItem>
            </Carousel>
            <div id="portfolioContainer">
                <div id="portfolioItems">
                    <img src={Password} alt="" />
                    <p>A bootcamp assignment where the goal was to capture user input and utilize it to generate a random password.</p>
                    <a href="https://github.com/michaelphan35/password-generator" target="_blank" rel="noreferrer noopener">
                        <p>Github Repository</p>
                    </a>
                    <a href="https://michaelphan35.github.io/password-generator/" target="_blank" rel="noreferrer noopener">
                        <p>Deployed Application/Video</p>
                    </a>
                </div>
                <div id="portfolioItems">
                    <img src={Ecommerce} alt="" />
                    <p>A bootcamp assignment where the main goal was to create a CLI application that allows a company to access their e-commerce information. The technologies used for this assignment were: MySQL and Sequelize.</p>
                    <a href="https://github.com/michaelphan35/e-commerce" target="_blank" rel="noreferrer noopener">
                        <p>Github Repository</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1IxujI2ZmWmfJ45wk7cjIYAThVIBunU_m/view" target="_blank" rel="noreferrer noopener">
                        <p>Deployed Application/Video</p>
                    </a>
                </div>
                <div id="portfolioItems">
                    <img id="spotifyImg" src={Spotify} alt="" />
                    <p>Our final bootcamp project. Using a combination of React, NodeJS, GraphQL, MangoDB and the Spotify API, our group created a Spotify clone that took, save and recalled user datat; users were able to sign up, search songs, and save them to their playlists.</p>
                    <a href="https://github.com/michaelphan35/project-mern" target="_blank" rel="noreferrer noopener">
                        <p>Github Repository</p>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer noopener">
                        <p>Deployed Application/Video</p>
                    </a>
                </div>
                <div id="portfolioItems">
                    <img src={SocialAPI} alt="" />
                    <p>A bootcamp assignment where we used Mangoose to handle users unstructured data.</p>
                    <a href="https://github.com/michaelphan35/social-api" target="_blank" rel="noreferrer noopener">
                        <p>Github Repository</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1FjxNApMQJFuSjSKSwQLdfP9NFX7mZlC1/view" target="_blank" rel="noreferrer noopener">
                        <p>Deployed Application/Video</p>
                    </a>
                </div>
                <div id="portfolioItems">
                    <img src={WebDev} alt="" />
                    <p>2nd bootcamp project. Our group created a social media website that was geared for current, past and future bootcamp participants. Users can create an accout, post comments and acces other's comments and threads regarding their bootcamop experience.</p>
                    <a href="https://github.com/michaelphan35/web-dev-social" target="_blank" rel="noreferrer noopener">
                        <p>Github Repository</p>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer noopener">
                        <p>Deployed Application/Video</p>
                    </a>
                </div>
                <div id="portfolioItems">
                    <img src={Controller} alt="" />
                    <p>Image mapping practice. Personal project where I created an image map over a controller image. Interacting with the image yields different actions.</p>
                    <a href="https://github.com/michaelphan350/actual-portfolio/tree/main/src/components/Imagemap" target="_blank" rel="noreferrer noopener">
                        <p>Github Repository</p>
                    </a>
                    <Link to='#' target="_blank" className="controllerLink">Deployed Application/Video</Link>
                </div>
            </div>


            {/* <div className="projectsDiv">
                <div className="eachProject project1">
                    <img src={Password} alt=""></img>
                    <p>Password Generator: Helps the user generate a random number</p>
                    <div className="gitHubContainer">
                        <p>hello</p>
                        <p>bye</p>
                    </div>
                </div>
                <div className="eachProject project2">
                <img src={Ecommerce} alt=""></img>
                    <p>E commerce: built back-end of an e-commerce application</p>
                    <div className="gitHubContainer">
                        <p>hello</p>
                        <p>bye</p>
                    </div>
                </div>
                <div className="eachProject project3">
                <img src={Spotify} alt=""></img>
                    <p>Final Bootcamp project in which our group created a spotify clone using react. Allows users to search up music and save music.</p>
                    <div className="gitHubContainer">
                        <p>hello</p>
                        <p>bye</p>
                    </div>
                </div>
                <div className="eachProject project4">
                <img src={SocialAPI} alt=""></img>
                    <p>Bootcamp project where I used mongoose to handle unstructured data.</p>
                    <div className="gitHubContainer">
                        <p>hello</p>
                        <p>bye</p>
                    </div>
                </div>
                <div className="eachProject project5">
                <img src={WebDev} alt=""></img>
                    <p>Bootcamp project where our group developed a social media application focused on hosting users that have completed or planning on completing the same bootcamp.</p>
                    <div className="gitHubContainer">
                        <p>hello</p>
                        <p>bye</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}


export default Projects