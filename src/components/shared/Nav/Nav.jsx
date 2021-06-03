import { NavLink } from "react-router-dom";
import './Nav.css'


export default function Nav() {

  return (
    <div className='nav-bar'>

      <img className='headshot' src="https://i.imgur.com/nZz1CO7.jpg" alt='headshot' />
      <p className='name' >
        Will A. Wardlow
      </p>

      <div className='links'>

      <NavLink className='about' to='/about'>
        About
      </NavLink>

      <NavLink className='projects' to='/projects'>
          Projects
      </NavLink>

      <a target='blank' className='resume' href='https://drive.google.com/file/d/1BmTsLOkBoB9EC_ahLEJnN0n1vNKPdp2D/view?usp=sharing'>
          Resume
      </a>
        
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
