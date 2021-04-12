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

      <a target='blank' className='resume' href='https://docs.google.com/document/d/113LxheGI_zYPta2zGSZy9YjEl3Xi8EdVUPud-vgzA3U/edit#'>
        Resume
      </a>

      <NavLink className='contact' to='/contact'>
        Contact
      </NavLink>
    </div>
  )
}
