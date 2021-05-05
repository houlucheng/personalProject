import {NavLink, Link, Route} from 'react-router-dom'
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
              <NavLink activeClassName="checkedClass" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="checkedClass" className="list-group-item" to="/home">Home</NavLink>

              {/*
                <Link className="list-group-item active" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              */}
              
              {/*
                <a className="list-group-item active" href="./about.html">About</a>
                <a className="list-group-item" href="./home.html">Home</a>
              */}
              
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/home" component={Home} />
                <Route path="/About" component={About} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
