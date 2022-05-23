import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

//Components
import Nav from './Components/Nav.js'
import Home from './Components/Home.js'
import Java from './Components/Java.js'
import OperatingSystems from './Components/OperatingSystems.js'
import ComputerNetworks from './Components/ComputerNetworks.js'
import Dbms from './Components/Dbms.js'
import Footer from './Components/Footer.js';
import About from './Components/About'

//CSS
import './App.css';
import './CSS/Home.css'

function App() { 
  return (
    <Router>
      <div className="App">
        <Nav/> {/* Navbar */}

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

             <Route exact path="/java">
              <Java/>
            </Route>

            <Route exact path="/operatingsystems">
              <OperatingSystems/>
            </Route>

            <Route exact path="/computernetworks">
              <ComputerNetworks/>
            </Route>

            <Route exact path="/dbms">
              <Dbms/>
            </Route>
            
            <Route exact path="/about">
              <About/>
            </Route> 
          </Switch>
        </div> 

        <Footer/> {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
