import { NavLink } from "react-router-dom";
import './Nav.css'


export default function Nav() {

  return (
    <div className='nav-bar'>

      <img className='headshot' src="https://i.imgur.com/nZz1CO7.jpg" alt='headshot' />
      <NavLink className='name' to='/' >
        Will A. Wardlow
      </NavLink>

      <div className='links'>

      <NavLink className='about' to='/about'>
        About
      </NavLink>

      <NavLink className='projects' to='/projects'>
          Projects
      </NavLink>

      <NavLink className='resume-link' to='/resume'>
          Resume
      </NavLink>
        
      <NavLink className='contact' to='/contact'>
          Contact
      </NavLink>
      </div>

      <div className='icons'>

        <a className='linkedin' href='https://www.linkedin.com/in/will-wardlow/' target='blank'>
          <img src='https://i.imgur.com/JMrpyRv.png' alt='linkedin icon' />
        </a>

        <a className='github' href='https://github.com/willwardlow' target='blank'>
         <img src='https://i.imgur.com/9Mu6JAV.png' alt='github icon'/>
        </a>

      </div>

      <p className='copyright'> &#169; 2021</p>
    </div>
  )
}
