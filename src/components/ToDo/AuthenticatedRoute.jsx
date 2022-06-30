import React from "react";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            // return <Route {...this.props.children} ></Route> React 5
            return {...this.props.children}
        }
        else{
            return <Navigate to = "/login"></Navigate>
        }
    }
}

export default AuthenticatedRoute;