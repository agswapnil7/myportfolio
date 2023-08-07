import React from 'react'

function WhatIDo() {
  return (
    <div className='abc container-fluid'>
      <div className='con row services' data-aos="fade-right" data-aos-duration="2000">
        <h1 className='mt-5 hdngs mb-5' id='three'>Services</h1>
      </div>
      <div className='row services' data-aos="fade-right" data-aos-duration="2000">
      <div className='banner-left col'>
        <h1>HTML</h1>
        <h5>I am proficient in writing HTML code and can create well-structured and semantically meaningful web pages using different HTML tags and attributes.</h5>
      </div>
      <div className='banner-right col'>
        <h1>CSS</h1>
        <h5>I have a solid understanding of CSS concepts such as selectors, cascading, and inheritance, and I am able to use CSS to style and layout HTML elements and pages.</h5>
      </div>
      </div>
      <div className='row services' data-aos="fade-left" data-aos-duration="2000">
        <div className='banner-left col'>
          <h1>Javascript</h1>
          <h5>I am comfortable writing JavaScript code and understand fundamental concepts such as variables, data types, functions, loops, and conditionals, and I can use JavaScript to add interactivity and functionality to web pages.</h5>
        </div>
        <div className='banner-right col'>
          <h1>Bootstrap</h1>
          <h5> I have a good grasp of the Bootstrap framework and its components, and I can use it to quickly create responsive and mobile-friendly web pages and user interfaces.</h5>
        </div>
      </div>
      <div className='services row mb-5' data-aos="fade-right" data-aos-duration="2000">
        <div className='banner-left col'>
          <h1>React Js</h1>
          <h5>I am familiar with React framework and its core concepts such as components, state, props, and the Virtual DOM, and I can use React to build dynamic and responsive web applications.</h5>
        </div>
        <div className='banner-right col'>
          <h1>J Query</h1>
          <h5> I have a good understanding of the jQuery library and its syntax, and I am able to use it to manipulate HTML elements and create dynamic web pages.</h5>
        </div>

      </div>
    </div>
  )
}

export default WhatIDo
