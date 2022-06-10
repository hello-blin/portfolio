import React from 'react'
import './About.scss'
function About() {
  return (
    <div className='about-container'>
      <div className='about-container__headline'>
        <h1 className='about-headline'>
          No Sugar on my coffee
        </h1>
      </div>
      <div className="about-container__description">
        <span className='about-headline__description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laudantium expedita tenetur a similique quam, laboriosam maiores voluptatem vero, esse autem optio asperiores sequi eligendi nesciunt quo explicabo sit excepturi.
        </span>
      </div>
    </div>
  )
}

export default About