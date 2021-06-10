import './Landing.css'

export default function Landing() {

  return (
    <div className='landing-container'>
      <p>
        Hello, and welcome to my portfolio page. I am a Full-Stack Software Engineer. Feel free to explore the site to learn more about me and my work! 
      </p>
      
      <p>
        My current tech stack and proficiencies:
      </p>
      <div className='tech-stack-icons'>
        <img src='https://i.imgur.com/pAVaoyK.png'
          alt='html'
          className='html'/>
        <img src='https://i.imgur.com/se5PrO1.png'
          alt='css'
          className='css'/>
        <img src='https://i.imgur.com/FxHBn8X.png'
          alt='javascript'
          className='javascript'/>
        <img src='https://i.imgur.com/FcEWO1m.png'
          alt='react'
          className='react'/>
        <img src='https://i.imgur.com/QyxPPuX.png'
          alt='node'
          className='node'/>
        <img src='https://i.imgur.com/nbvnDk7.png'
          alt='express'
          className='express'/>
        <img src='https://i.imgur.com/R3xaOWG.png'
          alt='mongoose'
          className='mongoose'/>
        <img src='https://i.imgur.com/iUbB2Tb.png'
          alt='ruby'
          className='ruby'/>
        <img src='https://i.imgur.com/GrMM2H6.png'
          alt='rails'
          className='rails'/>
          <img src='https://i.imgur.com/8y3BmZW.png'
          alt='postgreSQL'
          className='postgreSQL'/>
      </div>
    </div>
  )
}
