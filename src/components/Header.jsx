import React, { Component } from 'react'

 class Header extends Component {
  render() {
    return (

<nav className=" navbar navbar-expand-lg bg-body-tertiary">
  <div className="top-nav container-fluid">
    <a className="nav-link active ms-3" aria-current="page" href="/">Gourmet au Catering</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
       <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
        <li className="nav-item me-3">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>
   <li className="nav-item me-3">
          <a className="nav-link active" aria-current="page" href="#ourmenu">Menu</a>
        </li>
          <li className="nav-item me-3">
          <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
        
     
      </ul>
    </div>

    
  </div>
</nav>

    )
  }
}

export default Header