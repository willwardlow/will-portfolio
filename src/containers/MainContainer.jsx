import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from '../screens/About/About'
import Contact from '../screens/Contact/Contact'
import Landing from '../screens/Landing/Landing'
import Projects from '../screens/Projects/Projects'
import Resume from '../screens/Resume/Resume'

export default function MainContainer() {
  return (
    <Switch>
      <Route path='/resume'>
        <Resume />
      </Route>
      
      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>

      <Route path='/projects'>
        <Projects />
      </Route>

      <Route path='/'>
        <Landing />
      </Route>
    </Switch>
  )
}
