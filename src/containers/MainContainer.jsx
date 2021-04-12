import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from '../screens/About/About'
import Contact from '../screens/Contact/Contact'
import Landing from '../screens/Landing/Landing'
import Projects from '../screens/Projects/Projects'

export default function MainContainer() {
  return (
    <Switch>
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
