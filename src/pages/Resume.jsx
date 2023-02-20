import "./resume.scss"
import {NavLink as Link} from "react-router-dom"
const Resume = () => {
    return (
        <div className="contacts">
             <div className="navDiv">
                <div className="toggleBtn"><button className="dayNight">Toggle</button> </div>
                <div className="homeBtn"><Link to="/"><button type="button" id="homeBtn">Home button</button></Link></div>
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
                        <Link to="/contacts">Contactsx</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Resume