import React from 'react'
import './Content.css'
import {Switch, Route} from 'react-router-dom'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'


const Content = props => (
    <aside className="Content">
       <Switch>
           <Route path="/about">
               <Home/>
           </Route>
           <Route path="/">
               <About/>
           </Route>
       </Switch>
    </aside>
)

export default Content