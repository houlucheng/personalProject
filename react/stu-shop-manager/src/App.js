import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import Frame from './components/Frame/Index'
import './App.css';

function App() {
  return (
    <Frame>
      <Switch>
        {
          adminRoutes.map((route, index) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={routeProps => {
                  console.log(routeProps);
                  return <route.component {...routeProps} />
                }} />
            )
          })
        }
        <Redirect to="/404" />
      </Switch>
    </Frame>
  );
}

export default App;
