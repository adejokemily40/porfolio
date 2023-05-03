import React from 'react'
import abtImg from '../images/ceo_kyt2lh.jpg'
 

function About() {
  return (
    <div className='center-container'>
      <div className='abt-container'>
        <div className='aboutImg'>
          <img src= {abtImg} alt='professional-man' />
        </div>
        <h1 className='head'>About Company</h1>
        <p className='text-area'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
            Hic ducimus tempora cupiditate ipsum iste <br/>
          quidem magni maxime voluptatem, accusantium odit quae. Quaerat vero beatae 
            officiis tempore aperiam.</p>
            <button className='btn btn-primary'>Book a call</button>
            <button className='btn btn-primary'>Our Works</button>
        
      </div>  
    </div>
  )
}

export default About