import React from 'react'
import './About.scss'
import { images } from '../../constants/constants'

function About() {
  return (
    <div className='about-container'>
      <div className="about-first__column">
        <div className='about-container__headline'>
          <h1 className='about-headline'>
            No Sugar on my coffee
          </h1>
        </div>
        <div className="about-container__description">
          <span className='about-headline__description'>
            Hi, my name is Blin Kukaj and I come from Kosovo. Programming started as more of a hobby for me, but now it's definitely a great passion.
            As a Web Developer, I started by making sample projects as a 14 year old. I found it sort of boring, however oportunities burst out and I began working on out-source projects for a very cheap price. After spending more and more time coding, I started to like the problem-solving aspect of it and quickly became addicted to the high of figuring out a difficult problem.
          </span>
        </div>
      </div>
      <div className="about-second__column">
        <div className="inner-second__div" aniamte={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }}>
          <img src={images.hey} alt="" />
        </div>

      </div>
    </div>
  )
}

export default About