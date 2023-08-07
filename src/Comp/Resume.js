import React from 'react'

function Resume() {
  return (
    <div className='abc'>
      <div className=' contact con row' data-aos="fade-left" data-aos-duration="2000">
      <h1 className='mt-5 hdngs mb-5' id='four'>Resume</h1>
      </div>
      <h1 className='con services'  data-aos="fade-left" data-aos-duration="2000">My Education</h1>
      <div className='con resume'  data-aos="fade-right" data-aos-duration="2000">
        <h3>School level</h3>
        <h4 style={{color:'skyblue'}}>2064-2074</h4>
        <h5>New Horizon English Boarding School</h5>
        <p>Studying science in school provided me with a solid foundation for understanding the natural world, including the laws of physics, the workings of the human body, and the chemistry of materials.</p>
      </div>
      <div className='con resume'  data-aos="fade-left" data-aos-duration="2000">
        <h3>Computer Science</h3>
        <h4 style={{color:'skyblue'}}>2075-2077</h4>
        <h5>Trinity International College</h5>
        <p>Studying computer science in high school provided me with an introduction to the basics of programming and computational thinking, which are essential skills for success in many fields today, including software development, data analysis, and machine learning.</p>
      </div>
      <div className='con resume'  data-aos="fade-right" data-aos-duration="2000">
        <h3>BSc CSIT</h3>
        <h4 style={{color:'skyblue'}}>2078-Running</h4>
        <h5>Tribhuwan University</h5>
        <p>Studying computer science and information technology (CSIT) in college provided me with the preparation needed for a career in the tech industry, which is one of the fastest-growing and highest-paying fields in the world. CSIT majors learn advanced programming techniques, software engineering principles, and database management skills that are in high demand by employers.</p>
      </div>
    </div>
  )
}

export default Resume