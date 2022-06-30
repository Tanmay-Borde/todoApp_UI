import React from "react";
import { Component} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import withNavigation from "./withNavigation.jsx";
import withParams from "./withParams";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import ListToDosComponent from "./ListTodosComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx"; 
import WelcomeComponent from "./WelcomeComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";
import LogoutComponent from "./Logout.jsx";

class TodoApp extends Component{
    render(){
        const LoginComponentWithNav = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNav = withNavigation(HeaderComponent);
        const TodoComponentWithParamsAndNav = withParams(withNavigation(TodoComponent));
        const ListTodosComponentWithNav = withNavigation(ListToDosComponent);

        return(
            <div className="TodoApp">
                {/* <LoginComponent></LoginComponent> */}
                <Router>
                    <HeaderComponentWithNav></HeaderComponentWithNav>
                        <Routes>
                            <Route path = "/" element = { <LoginComponentWithNav/> }></Route>
                            <Route path = "/login" element = { <LoginComponentWithNav/> }></Route>
                            <Route path = "/welcome/:name" element={ <AuthenticatedRoute><WelcomeComponentWithParams/></AuthenticatedRoute>}></Route>
                            <Route path = "/todo/:id" element = { <AuthenticatedRoute><TodoComponentWithParamsAndNav/></AuthenticatedRoute>}></Route>
                            <Route path = "/todo" element = { <AuthenticatedRoute><ListTodosComponentWithNav/></AuthenticatedRoute> } ></Route>
                            <Route path = "/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>} ></Route>
                            <Route path = "*" element = { <ErrorComponent></ErrorComponent> }></Route>
                        </Routes>
                    <FooterComponent></FooterComponent>
                </Router>
            </div>
        );
    }
}

//used boolean exp: Line 75, hence this fun is commented
// function ShowInvalidCreds(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credetials</div>
//     }
//     return null
// }

// function ShowLoginMsg(props){
//     if(props.LoggedIn){
//         return <div>Valid Credetials....</div>
//     }
//     return null
// }

// class WelcomeComponent extends Component{
//     render(){
//         return (
//         <div className="container">
//                     Welcome {this.props.params.name}. You can manage your To-Do List <Link href="/todo">here</Link>.
//                 </div>
//         )
//     }
// }

function ErrorComponent(){
    return(
        <div>404 Page Not Found....</div>
    )
        
}

// class LogoutComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h2>You are Logged Out</h2>
//                 <div className="container">Thank you for using our App</div>
//             </div>
//         )
//     }
// }

export default TodoApp