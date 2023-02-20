import "./contact.scss"
import {NavLink as Link} from "react-router-dom"
const Contacts = () => {
    return (
        <div className="contacts">
             <div className="navDiv">
                <div className="toggleBtn"><button className="dayNight">Toggle</button> </div>
                <div className="homeBtn"><Link to="/"><button type="button" id="homeBtn">Home button</button></Link></div>
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