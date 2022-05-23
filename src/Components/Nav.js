import React from 'react'

import logo from '../Logos/binary-code.png'

import '../App.css'
import '../CSS/Nav.css'

function Nav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm ">
            <a class="navbar-brand" href="#"><img src={logo} height="50px" width="50px"/> Skill Bite</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav d-flex justify-content-around nav-fill w-100">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#">Java</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Operating Systems</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Computer Networks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">DBMS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav