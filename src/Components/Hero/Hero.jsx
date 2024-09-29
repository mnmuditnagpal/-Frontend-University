import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'> 
       <div className="hero-text">
        <h1 className="title">We Ensure Better Education For The World</h1>
        <p className="description">
            Our cutting-edge curriculum & exceptional faculty empower students with the knowledge, skills and experience required to excel in the dynamic field of education.
        </p>
        <button className="btn">Explore More <img src={darkarrow}/></button>
       </div>
    </div>
  )
}

export default Hero
