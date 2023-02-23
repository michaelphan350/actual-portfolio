import Home from "./pages/About"
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contacts from "./pages/Contacts";
import Controller from "./components/Imagemap/Imagemap"
import './App.css';


function App() {

  
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/controller' element={<Controller/>} />
    </Routes>
    </HashRouter>
  );
}

export default App;
