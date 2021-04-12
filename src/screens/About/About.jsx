import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about-container'>
      <img className='headshot' src="https://i.imgur.com/nZz1CO7.jpg" alt='headshot' />
      <div className='about-text'>
        <p>
          Optimistic, disciplined, approachable software developer with a strong background in customer service and management. I aim to join a mission-driven company, where I can make improvements at the community level through impactful products.
        </p>
        <p>
          I was born and raised on Chicago's south side. My interests in technology and STEM started at a young age, often participating in various competitions and programs to keep me occupied and always learning. 
        </p>
        <p>
          During college, my passions shifted from STEM and Tech, to coffee and community. I was a manager for Peet's Coffee for 2 years of my 8 year tenure. There I learned a multitude of skills that I hope to bring to a like-minded company. 
        </p>
        <p>
          Recently, I finished General Assembly's Software Engineeering Immersive program. In this 12 week program, I learned skills ranging from front-end development, back-end development, computer science and algorithms.  
        </p>
      </div>
    </div>
  )
}
