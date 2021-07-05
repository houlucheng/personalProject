import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>我是app</h1>
      <Switch>
        {
          adminRoutes.map((route, index) => {
            return (
              <Route 
              key={route.path} 
              path={route.path} 
              exact={route.exact} 
              render={routeProps => {
                return <route.component {...routeProps} />
              }} />
            )
          })
        }

      </Switch>
    </div>
  );
}

export default App;
