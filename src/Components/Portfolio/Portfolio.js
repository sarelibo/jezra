import React from 'react'
import './Portfolio.css'
import graduation from '../assets/img/graduation.jpg'
import mypet from '../assets/img/mypet.jpg'
import mytwin from '../assets/img/mytwin.jpg'
import family from '../assets/img/family.jpg'
import friends from '../assets/img/friends.jpg'
import karate from '../assets/img/karate.jpg'


const Project = () => {
  return (
    <section id="works">
      <h2 className='worksTittle'>My Gallery</h2>
  
     
      <div className="worksImgs">

      <div className='cardContainer'>
        <img src={graduation} alt="" className="workImg" />
        <p>My Graduation Picture.</p>
        
      </div>

      <div className='cardContainer'>
        <img src={mypet} alt="" className="workImg" />
        <p>Together with my pet ChuChu.</p>
       
      </div>

      <div className='cardContainer'>
      <img src={mytwin} alt="" className="workImg" />
      <p>This is my twin when we're young.</p>
      
      </div>

      <div className='cardContainer'>
        <img src={family} alt="" className="workImg" />
        <p>This is my family in the father side.</p>
       
      </div>

     <div className='cardContainer'>
       <img src={friends} alt="" className="workImg" />
       <p>These are my college friends.</p>
      
       </div>

      <div className='cardContainer'>
        <img src={karate} alt="" className="workImg" />
        <p>This is my memories when i compete to a mast sports competition.</p>
       
      </div>
    </div>
      <button className="workBtn">See More</button>
    </section>
    
  )
}

export default Project