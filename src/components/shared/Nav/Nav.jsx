import { NavLink } from "react-router-dom";
import './Nav.css'


export default function Nav() {
  return (
    <div className='nav-bar'>
      <NavLink className='name' to='/'>
        Will A. Wardlow
      </NavLink>

      <NavLink className='about' to='/about'>
        About
      </NavLink>

      <NavLink className='projects' to='/projects'>
        Projects
      </NavLink>

      <a target='blank' className='resume' href='https://drive.google.com/drive/u/0/folders/1RLZpiFgVH-v9nakhAEvsBpd3PQ4BPThM'>
        Resume
      </a>

      <NavLink className='contact' to='/contact'>
        Contact
      </NavLink>
    </div>
  )
}
