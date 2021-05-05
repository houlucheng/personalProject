import {NavLink, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Test from './components/Test'

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
              <NavLink activeClassName="checkedClass" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="checkedClass" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Switch组件是确保匹配到对应的路由后不会再往下匹配 
                  * 不加 Switch /About路由将匹配两个组件 加上 Switch 只匹配 About组件
                */}
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/About" component={About} />
                  <Route path="/About" component={Test} />
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
