import React from 'react'
import Typewriter from 'typewriter-effect';
import About from './About';
function Header() {
    return (
        <div className='abc container-fluid' data-aos="zoom-out" data-aos-duration="2000">
            <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
      <a className="navbar-brand" to="#">
          <img src='https://cdn.freelogodesign.org/files/f8f332abb0b643baaa63b280b900b410/thumb/logo_200x200.png?v=638127640360000000' alt="Logo" width="120" height="120" className="d-inline-block align-text-top mt-3 "/>
        </a>
    
        <button className="navbar-toggler-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>     
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-between fs-6 fw-semibold p-2">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#two">ABOUT US</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#three">WHAT I DO</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#four">RESUME</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#five">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className='headicon'>
        
        <a href ='https://www.facebook.com/profile.php?id=100005384233443' target='blank'>
          <i className="fab fa-facebook   ms-4 text-light gg"></i>
        </a>
        <a href ='https://www.instagram.com/swazy.x7/' target='blank'>
          <i className="fab fa-instagram  ms-4 text-light gg"></i>
        </a>
        <a href ='https://www.linkedin.com/in/swapnil-neupane-486b80229/' target='blank'>
          <i className="fab fa-linkedin  ms-4 text-light gg"></i>
        </a>
        </div>
        </div>
    </nav>
    <div className='container-fluid'>
        <div className='row aa'  data-aos-duration="2000">
        <div className='banner-left col' data-aos="fade-right" data-aos-duration="2000">
        <div className="text-center bb">
          <h2>Welcome</h2>
          <div className='typewriter'>
          <Typewriter
          options={{
            strings: ['I am Swapnil Neupane', 'I am a Web Designer', 'I am a Freelancer'],
            autoStart: true,
            loop: true,}}
  />
  </div>
          <h2>From Kathmandu, Nepal</h2>
          <button type="button" class="btn btn-outline-info"><a href= '#five' >Hire Me </a></button>
    </div> 
        </div>
        
        </div>
    </div>
    
    </div>
      )
    }
    
    export default Header

