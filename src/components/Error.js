import React, { Component } from 'react'

export default class Error extends Component {
  render() {
    return (
      <div className='container text-center' style={{color:'red'}}>
        <h1>Api Call Limit Exceed</h1>
      </div>
    )
  }
}
