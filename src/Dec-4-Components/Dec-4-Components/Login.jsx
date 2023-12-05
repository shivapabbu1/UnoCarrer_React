import React, { Component } from 'react'

 class Login extends Component {
    state = {
        account: {
            username: "",
            password: ""
        }
    };
    handleSubmitt = (e) => {
        e.preventDefault();
        console.log("acount .. username--->" + this.state.account.username);
        console.log("acount .. password--->" + this.state.account.password);
        
        console.log("Submitt Pressed!!!!");

    }
    handleOnChange = (e) => {
        const account = { ...this.state.account };
        console.log(e);
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
       
        

    }

  render() {
   return(
    <>
 <form onSubmit={this.handleSubmitt}>  
                    <div className="form-group">
                        <label for="exampleInputEmail1">UserName</label>
                    <input
                        onChange={this.handleOnChange}
                        value={this.state.account.username} type="text"
                        className="form-control"
                        id="username" 
                        name="username"
                    />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                    <input
                        onChange={this.handleOnChange}
                        value={this.state.account.password}
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                    />
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

    
    </>
   )
    
  }
}
export default Login;