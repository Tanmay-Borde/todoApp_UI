import React from "react"
import { Component } from "react"
import { Link } from "react-router-dom"
import HelloWorldService from "../../API/TODO/HelloWorldService.js"

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMsg = this.retrieveWelcomeMsg.bind(this)
        this.state = {
            welcomeMsg : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this);
    }

    render(){
        return(
            <div>
                <h2>Welcome</h2>
                    <div>Welcome {this.props.params.name}</div>
                    Manage You TODOs <Link to="/todo">here</Link>.
                <br></br>
                <div className="container">
                    Click Here to get Customized msg.<br></br>
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMsg}>Get Welcome Msg</button>
                </div>
                <div className="container">
                    {this.state.welcomeMsg}
                </div>
            </div>
        )
    }

    //Axios 

    retrieveWelcomeMsg(){
        // console.log("Retrieve Clicked");
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))

        // HelloWorldService.executeHelloWorldBeanService()
        //     .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response){
        console.log(response);
        this.setState({
            welcomeMsg: response.data.msg       //since JSON format, so use 'msg'
        })
    }

    handleError(error){
        console.log(error.response);
        let errorMessage = '';

        if(error.message){
            errorMessage += error.message
        }

        // if(error.message && error.response.data){
        //     errorMessage += error.response.data.message
        // }

        this.setState({welcomeMsg : errorMessage})
    }

}

export default WelcomeComponent