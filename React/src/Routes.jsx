import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import Works from './pages/Works'

const Routes = () => {
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/studio" component={Studio} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
    </Switch>
  
}

export default Routes