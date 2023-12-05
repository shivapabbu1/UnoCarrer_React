import React, { Component } from 'react'

export default class LoginForm extends Component {
    state={
        User:{
            email:"",
            password:"",
        }
    }
    HandleChange=(val)=>{
   const Userdata={...this.state.User}
   Userdata[val.currentTarget.name]=val.currentTarget.value;
   this.setState({User:Userdata})

}
    HandleSubmit=(e)=>{
        e.preventDefault()
        console.log("....submitted...");
        console.log("User Email>>"+this.state.User.email);
        console.log("User passwprd>>"+this.state.User.password);
        //  const intialValue={...this.state.User}
        this.setState({User:{
                email:"",
                password:"",
               }
        })
       
    }

  render() {

    return (
      <>

<form onSubmit={this.HandleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.User.email} onChange={this.HandleChange}/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" value={this.state.User.password} onChange={this.HandleChange}/>
  </div>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>


</>




    )
  }
}
