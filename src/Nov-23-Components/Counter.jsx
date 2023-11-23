import React, { Component } from 'react'

class Counter extends Component {
    state={
        counter:0
    }
    Increment=()=>{
        this.setState({ counter: this.state.counter + 1})
        if(this.state.counter>19){
            this.setState({counter: this.state.counter=20})
            alert("Sorry..! Your Limit was Completed")
            }
        }
    Decrement=()=>{
        this.setState({ counter: this.state.counter - 1 } )
        if(this.state.counter<=0){
            this.setState({counter: this.state.counter=0})
            alert("Sorry..! You are not allowed to Decrement less than Zero")
            }
           }
   
   render(){
        return (<>
            <button class="btn btn-danger" onClick={this.Increment}>+</button>
            &nbsp;   {this.state.counter} &nbsp;
             <button class="btn btn-primary" onClick={this.Decrement}>-</button>
            &nbsp;  &nbsp;  <button class="btn btn-warning" onClick={() => this.setState({ counter: this.state.counter =0 })}>RESET</button>
            </>
        )
    }
 }

export default Counter