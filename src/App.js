import React, {useState} from 'react';

//Components
import Nav from './Components/Nav.js'
import Home from './Components/Home.js'
import Java from './Components/Java.js'
import OperatingSystems from './Components/OperatingSystems.js'
import ComputerNetworks from './Components/ComputerNetworks.js'
import Dbms from './Components/Dbms.js'

//CSS
import './App.css';
import './CSS/Home.css'

function App() { 
  let display = new Map([
    ["home",true],
    ["java",false],
    ["os",false],
    ["cn",false],
    ["dbms",false]
  ]);

  return (
    <div className="App">
      <Nav/>
    </div>
  );
}

export default App;
