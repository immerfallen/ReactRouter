import React from 'react'
import './Content.css'
import {Switch, Route} from 'react-router-dom'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import Param from '../../views/examples/Param'


const Content = props => (
    <aside className="Content">
       <Switch>
           <Route path="/home">
               <Home/>
           </Route>
           <Route path="/about">
               <About/>
           </Route>
           <Route path="/param/:id">
               <Param/>
           </Route>
       </Switch>
    </aside>
)

export default Content