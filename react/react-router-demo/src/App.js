import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Test from './componens/Test'

function App() {
  return (
    <div className="App">
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
            <Test a='你好' />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about" >About</NavLink>
              <NavLink className="list-group-item" to="/home" >Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                  * Redirect 重定向
                */}
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/About" component={About} />
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
