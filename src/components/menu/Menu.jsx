import "./menu.scss"
import { NavLink as Link } from "react-router-dom"

export default function Menu({ menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
            <Link to="/about">About</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
            <Link to="/projects">Projects</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
            <Link to="/resume">Resume</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
            <Link to="/contacts">Contacts</Link>
            </li>

        </ul>

    </div>
  )
}
