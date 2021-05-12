import React from 'react'
import {withRouter} from 'react-router-dom'

const Test = function(props) {
  console.log(props);
  const {history} = props

  function goBack() {
    history.goBack()
  }
  function goForward() {
    history.goForward()
  }
  return (
    <div>
      <button onClick={goBack}>后退</button>
      <button onClick={goForward}>前进</button>
    </div>
  )
}

export default withRouter(Test)
