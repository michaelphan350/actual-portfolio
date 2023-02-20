import { Amap, Bmap, Xmap, Ymap, Startmap, Menumap, Lanamap, Ranamap, Ldirmap } from "./Mapping"
import Controller from "../assets/images/lunar-controller.jpg"
import "./imagemap.scss"
import {NavLink as Link} from "react-router-dom"
// import { NavLink } from "react-router-dom"

    /*const myFunction = () => {
        alert('WOO!')
    }*/

    /*const myFunction2 = () => {
        alert('wow its working!')
    }*/

const Imagemap = () => {

    const myFunction = () => {
        Amap()
    }
    const myFunction2 = () => {
        Bmap()
    }
    const myFunction3 = () => {
        document.getElementById("aText").innerHTML = Xmap
    }
    const myFunction4 = () => {
        document.getElementById("aText").innerHTML = Ymap
    }
    const myFunction5 = () => {
        Startmap()
    }
    const myFunction6 = () => {
        Menumap()
    }
    const myFunction7 = () => {
        Lanamap()
    }
    const myFunction8 = () => {
        document.getElementById("aText").innerHTML = Ldirmap
    }
    const myFunction9 = () => {
        document.getElementById("aText").innerHTML = Ranamap
    }
    
    return (
        <div className="imageDiv">
            <div className="container">
            <h2 id="text">Interact with the controller prior to pressing the menu button!</h2>
            <img src = {Controller} alt="Wii remote" id="controller" usemap="#image-map"></img>
            <figcaption id="figcaption">        
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
            <li>
            <Link to="/contacts">Contacts</Link>
            </li>

        </ul>
        </figcaption>
            </div>
<map name="image-map">
    <area alt="A button" title="Quotes" coords="456,158,21" shape="circle" href="#" onClick={myFunction} id="myAbtn"/>
    <area alt="B button" title="Backgroud Color" href="#" coords="493,123,20" shape="circle" onClick={myFunction2}/>
    <area alt="X button" title="Nav Color" href="#" coords="419,121,20" shape="circle" onClick={myFunction3} />
    <area alt="y" title="y" href="#" coords="456,86,20" shape="circle" onClick={myFunction4} />
    <area alt="Start" title="Page Reload" href="#" coords="356,121,20" shape="circle" onClick={myFunction5} />
    <area alt="Menu" title="Opens Menu" href="#" coords="276,120,21" shape="circle" onClick={myFunction6} />
    <area alt="Left A." title="Left A." href="#" coords="175,122,38" shape="circle" onClick={myFunction7} />
    <area alt="D. Pad" title="D. Pad" href="#" coords="244,209,46" shape="circle" onClick={myFunction8} />
    <area alt="Right A." title="Right A." href="#" coords="388,203,35" shape="circle" onClick={myFunction9}/>
</map>
        <div id="aText"></div>
        </div>


        

        
    )
}

//document.GetElementById("myAbtn").addEventListener("click", myFunction);
//document.GetElementById("myBbtn").addEventListener("click", myFunction2);

export default Imagemap