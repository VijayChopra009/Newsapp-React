import React, { Component } from 'react'
import spinner from './image/spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="loading" style={{height:'50px',width:'50px',margin:'30px '}} />
      </div>
    )
  }
}
