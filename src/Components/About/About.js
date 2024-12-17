import React from 'react'
import './About.css'
import position from '../assets/img/position.jpg'
import passion from '../assets/img/passion.jpg'
import skills from '../assets/img/skills.jpg'



const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTittle">Get To Know Me More</span> <br/>
      <span className="skillDesc">Take a moment to explore and get to know me better-my position,passion, and journey.</span>
      <div className="skillBars">
          <div className="skillBar">
          <img src={position} alt="" className='skillBarImg' />
              <div className="skillBarText">
                <h2>Position</h2>
                <p>I'm currently a fourth year student and I have a knowledge of creating and building simple databases and simple application. Also I work under pressure.</p>
            </div>
          </div>

          <div className="skillBar">
           <img src={passion} alt="" className='skillBarImg' />
            <div className="skillBarText">
              <h2>Passion</h2>
              <p>Karatedo Martial Art is one of my passion beacause this discipline involves self-control, respect, mental discipline, perseverance and accountability.</p>
            </div>
          </div>

          <div className="skillBar">
           <img src={skills} alt="" className='skillBarImg' />
            <div className="skillBarText">
              <h2>Skills</h2>
              <p>I'm fond of cooking and baking breads, cakes, and other pastries. </p>
            </div>
          </div>


            </div>
    

    </section>
  )
}

export default Skill