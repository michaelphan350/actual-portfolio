import Home from "./pages/About"
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contacts from "./pages/Contacts";
import Controller from "./components/Imagemap/Imagemap"
import './App.css';


function App() {

  
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/controller' component={Controller} />
    </Switch>
    </HashRouter>
  );
}

export default App;
