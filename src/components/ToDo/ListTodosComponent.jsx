import React from "react"
import { Component } from "react"
import TodoDataService from "../../API/TODO/TodoDataService.js"
import AuthenticationService from "./AuthenticationService.js"
import moment from 'moment'

class ListToDosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [],
            ack_message : null
        }
        this.deleteTodoClicked  = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked  = this.updateTodoClicked.bind(this);
        this.addTodoClicked     = this.addTodoClicked(this);
        this.refreshTodos       = this.refreshTodos.bind(this);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called....")
    }

    shouldComponentUpdate(nextProps, nextState){        //used to do conditional rendering as per requirements and for better performance.
        console.log("shouldComponentUpdate called");
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    componentDidMount(){
        console.log("Did Mount called....")
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    this.setState({todos : response.data})
                }
            )
    }

    // deleteTodoClicked(id){
    //     console.log("Update "+id)
    // }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({ ack_message: `Delete of todo ${id} Successful` })
                    this.refreshTodos()
                }
            )
            console.log(this.state.ack_message);

    }

    addTodoClicked() {
        let flag = -1;
        this.props.navigate(`/todo/${flag}`)
    }

    updateTodoClicked(id){
        // console.log('update ' + id)
        this.props.navigate(`/todo/${id}`)
        //this.props.history.push(`/todos/${id}`)
        
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )

    }

    render(){
        console.log("Render Called....")
        return (
        <div className="container">
            <h2>To Do List</h2><br></br>
            {this.state.ack_message && <div className="alert alert-success"> {this.state.ack_message} </div>}
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Completed?</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // <tr>
                        //     <td> {this.state.todos.id} </td>
                        //     <td> {this.state.todos.desc} </td>
                        // </tr>

                        this.state.todos.map(
                            todo =>
                            <tr key={todo.id}>
                                {/* <td> {todo.id} </td> */}
                                <td> {todo.desc} </td>
                                <td> {todo.done.toString()} </td>
                                <td> {moment(todo.targetDate).format('YYYY-MM-DD')} </td>
                                {/* <td> {todo.targetDate} </td> */}
                                <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="row">
                <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
            </div>
        </div>
        )
    }
}

export default ListToDosComponent;