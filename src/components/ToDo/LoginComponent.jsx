import React from "react";
import { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'tanmay64',
            password: '',
            hasLoginFailed: false,
            LoggedIn: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        // console.log(this.state)
        // console.log(event.target.name);
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    // handleUsernameChange(event){
    //     // console.log(event.target.value);
    //     console.log(event.target.name);
    //     // this.setState({username: event.target.value})
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handlePwdChange(event){
    //     console.log(event.target.value);
    //     this.setState({password: event.target.value})
    // }

    loginClicked(){
        //Tim Cook, abc
        // if(this.state.username === 'tanmay64' && this.state.password === 'sss')
        // {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     // this.props.history.push("/welcome")
        //     this.props.navigate(`/welcome/${this.state.username}`)
        //     // console.log("Login Successfull");
        //     this.setState({LoggedIn: true})
        //     this.setState({hasLoginFailed: false})
        // }
        // else
        // {
        //     console.log("Login Unsuccessfull");
        //     this.setState({hasLoginFailed: true})
        //     this.setState({LoggedIn: false})
        // }
        console.log(this.state)

        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.props.navigate(`/welcome/${this.state.username}`)
            }).catch(() => {
                console.log("Login Unsuccessfull");
                this.setState({hasLoginFailed: true})
                this.setState({LoggedIn: false})
            })

    }

    render(){
        return(
            <div className="container">
                <br></br>
                <h2>Login</h2>
                {/* <ShowInvalidCreds hasLoginFailed={this.state.hasLoginFailed} ></ShowInvalidCreds> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Creds</div> }    {/*using boolean. if LHS is true -> RHS of && is executed*/}
                {/* <ShowLoginMsg LoggedIn={this.state.LoggedIn} ></ShowLoginMsg> */}
                {/* <div >Invalid Credentials</div>
                <div>Login Successfull</div> */}
                {/* Username : <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} ></input> */}
                {/* Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input> */}
                {/* Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePwdChange} ></input><br></br><br></br> */}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} ></input>
                <button className="btn btn-success" onClick={this.loginClicked}>LOGIN</button>
            </div>
        );
    }
}

export default LoginComponent;