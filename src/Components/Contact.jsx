
import contactLady from '../images/black-professional-lady.jpg'
import React from 'react'

function Contact() {
  return (
    <div className='flexContaner'>
      <div className='contactContainer'>
        <div className='back-ground'>
          <img src={contactLady} alt='a-blacklady'/>
        </div>
        <div className='inputContainer'>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputFullname" class="form-label">FULL NAME</label>
    <input type="name" class="form-control" id="inputFullname" placeholder='Enter your name'/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail" class="form-label">EMAIL</label>
    <input type="email4" class="form-control" id="inputEmail4" placeholder='Enter a valid email address'/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">ADDRESS</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234, Main Street"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">MESSAGE</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className='btn-secondary'>SUBMIT</button>
</form>

        </div>

      </div>
      
    </div>
  )
}

export default Contact