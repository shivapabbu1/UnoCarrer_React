import React, { Component } from 'react'

 class PropsDemo extends Component {
    state={
        name:this.props.name,
        course:this.props.course,
        
    }
  render() {
    return (
   <>
    <div className='bg bg-light'>
     <h3>  Name:{this.state.name}</h3>
   Course: <button className='bg bg-warning'>{this.state.course}</button>
  </div>
    <p> {this.props.children}</p>
   
   </>
    )
  }
}
export default PropsDemo;
