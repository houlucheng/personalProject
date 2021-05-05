import {NavLink, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 如果点击高亮的class名是active就可不写 activeClassName */}
              <NavLink activeClassName="checkedClass" 
                className="list-group-item" 
                to="/about"
              >About</NavLink>
              <NavLink 
                activeClassName="checkedClass" 
                className="list-group-item" 
                to="/home/a/b"
              >Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                  * exact 开启精准匹配 默认模糊匹配 
                  * 如果是模糊匹配则 /home/a/b 也能匹配到 Home组件
                */}
                <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/About" component={About} />
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
