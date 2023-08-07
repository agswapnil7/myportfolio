import React from 'react'

function About() {
  return (
    <div className='abc'>
    <div className=' contact con row' id='two' data-aos="fade-left" data-aos-duration="2000">
    <h1 className='mt-5 hdngs mb-5' >Know Me More</h1>
      <div className='banner-left col'>
        <h1 className='mt-2'style={{ fontSize:'30px'}} >I am <span style={{color:'skyblue'}}>Swapnil Neupane</span>, a Web Designer.</h1>
        <p className='mt-3' style={{color:'#BEC2C3', fontSize:'20px'}}>Looking to build your brand on a budget? Look no further! I am dedicated to helping you achieve exceptional results at an affordable price. I pride myself on delivering high-quality work that meets all of your requirements within your timeframe and budget. Don't settle for less - choose me today to help build your brand.</p>
        <p className='mt-3' style={{color:'#BEC2C3', fontSize:'20px'}}>Whether you're just starting out or looking to rebrand, I can provide you with the expertise and guidance needed to achieve your goals. Let's work together to create a brand that truly stands out in your industry.</p>
    </div>  
    <div className='banner-right col'>
        <div className='mt-5 list '>
          <ul>
            <li className='listPersonal'><p><span>Name: </span>Swapnil Neupane</p></li>
            <li className='listPersonal'><p><span>E-mail: </span>swapneup123@gmail.com</p></li>
            <li className='listPersonal'><p><span>Age: </span>20</p></li>
            <li><p><span>From: </span>Kathmandu, Nepal</p></li>
            <li><a className="btn btn-outline-info" download role='button' href='.\public\cv.pdf'>Download CV</a></li>
          </ul>
        </div> 
      </div>
      <div className='con mt-5 mb-5'>
    <h2>Follow Me</h2>
    <p>Connect with me on social media:</p>

    <a href='https://www.facebook.com'>
    <i className="fab fa-facebook fa-2x text-light"></i>
    </a>
    <a href='https://www.instagram.com'>
      <i className="fab fa-instagram fa-2x ms-3 text-light"></i>
    </a>
    <a href='https://www.linkedin.com'>
      <i className="fab fa-linkedin fa-2x ms-3 text-light"></i>
    </a>
    </div>
      </div>
      </div>
  )
}

export default About