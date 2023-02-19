import Nav from "../components/Nav/Nav";
import Imagemap from "../components/Imagemap/Imagemap";
import Menu from "../components/menu/Menu";
import {useState} from "react"

const Home = () => {

    const [menuOpen , setMenuOpen ]= useState(false)
    return (
        <div className="App">
            <Nav menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="imageDiv">
              <Imagemap />
            </div>
        </div>
    )
}

export default Home