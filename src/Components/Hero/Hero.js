import React from 'react'
import './Hero.css'
import profile from '../assets/img/profile.png'

const Hero = () => {
  return (
    <section id="hero">
    <div className="introContent">
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'>Jezrealita Sarelibo</span> <br /> Welcome to my Personal Porfolio</span>
      <p className='introPara'> Dive into my portfolio to explore the projects that fuel my passion and innovation.
       </p>
      <div className="connect">Resume</div>
      

    </div>
    <img src= {profile} alt="" className="bg" />
    </section>
  )
}

export default Hero;