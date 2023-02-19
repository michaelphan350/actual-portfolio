import "./nav.scss"

/*const Nav = () => {
    return (
        <nav className="wrapper">
            <div className="left">
            <h1>Michael Phan: Full Stack Web Developer</h1>
            </div>
            <div className="right">
            <ul className="ul" id="unorderedLists">
                <li>About</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Contacts</li>
            </ul>
            </div>
        </nav>
    )
}
export default Nav */

export default function Nav ({ menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Michael Phan</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

