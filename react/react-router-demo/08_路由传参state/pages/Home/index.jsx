import React from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import Message from './Message'
import News from './News'

export default function Home() {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="/home/news" >News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/home/message" >Message</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>


    </div>
  )
}
