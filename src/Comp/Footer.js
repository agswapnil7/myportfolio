import React from 'react'

function Footer() { 
  return (
    <div className='abc container-fluid'>
      <div className=' contact con row mt-5' data-aos="fade-left" data-aos-duration="2000">
      <h1 className='mt-5 hdngs mb-5' id='five' >Contact</h1>
      </div>
      <div className=' contact con row mt-5' data-aos="fade-in" data-aos-duration="2000">
      <div className='banner-left col con footer'>
      <h3>ADDRESS</h3>
      <br></br>
<h5>Nagarjun-1, Nursery chowk</h5>
<h5>Banasthali, Kathmandu</h5>
<h5>Bagmati</h5>

<h5><i class="fas fa-phone"></i> +977 9821473081</h5>

<h5><i class="fas fa-phone"></i> +977 9866402429</h5>

<h5><i class="fas fa-envelope"></i> swapneup123@gmail.com</h5>
<br></br>
<h2>Follow Me</h2>
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
    <div className='banner-right col footer'>
        <h3>Send a note</h3>
        <br></br>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><h4>E-mail address</h4></label>
  <input type="email" class="form-control bg-black text-light" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h4>Write a message</h4></label>
  <textarea class="form-control bg-black text-light" id="exampleFormControlTextarea1" rows="4"></textarea>
</div>
<button type="button" class="btn btn-outline-info">Submit</button>
      </div>
      </div>
      <footer className='con contact'>
        <p>&copy;2023. Swapnil Neupane. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Footer