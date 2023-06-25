import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  debugger
  return {
    title: state.title,
    list: state.cart
  }
}

function Hello(props) {
console.log(props);
  return (
    <div>
      <p>{ mapStateToProps().title }</p>
    </div>
  )
}

export default connect(mapStateToProps, null)(Hello)