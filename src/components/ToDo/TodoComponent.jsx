import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Component } from "react";
import moment from "moment";
import TodoDataService from "../../API/TODO/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.params.id,
            desc: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount(){
        if (this.state.id === -1) {
            return
        }
        let username = AuthenticationService.getLoggedInUserName()

        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                desc: response.data.desc,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))

        // console.log("test111"+username)
        // console.log("id is : "+this.state.id)
        // .then(response => console.log(response.data.desc))

        // TodoDataService.retrieveTodo(username, this.state.id)
        // .then((response) => response.json())
        // .then(descList => {
        //      this.setState({ desc: descList });   
        //     });

        // TodoDataService.retrieveTodo(username, this.state.id)
        // .then(
        //     response => 
        //         {
        //             this.state.desc.map(
        //                 todo =>
        //                     <tr key={todo.id}>
        //                         <td>{todo.description}</td>
        //                         <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
        //                     </tr>
        //             )
        //         }            
        //     ) 
            // console.log(this.state.desc.desc)
            // console.log(this.state.desc)
            // console.log(this.state.id)
    }

    validate(values){
        // console.log(values);
        let errors = {}
        if(!values.desc){
            errors.desc = 'Enter a desc.'
        }
        else if(values.desc.length < 5){
            errors.desc = 'Enter atleast 5 chars in desc.'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid Date.'
        }

        return errors;
    }

    // onSubmit(values){
    //     let username = AuthenticationService.getLoggedInUserName()

    //     let todo = {
    //         id: this.state.id,
    //         description: values.description,
    //         targetDate: values.targetDate
    //     }

    //     if (this.state.id === -1) {
    //         TodoDataService.createTodo(username, todo)
    //             .then(() => this.props.navigate('/todo')) //REACT-6
    //         //this.props.history.push('/todos')
    //     } else {
    //         TodoDataService.updateTodo(username, this.state.id, todo)
    //             .then(() => this.props.navigate('/todo'))//REACT-6
    //         //this.props.history.push('/todos')
    //     }

    //     console.log(values);
    // }

    onSubmit(values){

        let username = AuthenticationService.getLoggedInUserName()

        let todo = {
            id: this.state.id,
            desc: values.desc,
            targetDate: values.targetDate
        }

        if(this.state.id === -1){
            TodoDataService.createTodo(username, this.state.id, todo)
                .then(() => this.props.navigate('/todo'))
        }
        else{
            TodoDataService.updateTodo(username, this.state.id,todo)
                .then(() => this.props.navigate('/todo'))
        }


        console.log(values);

    }

    //     console.log(values)
    //     if (this.state.id === -1) {
    //         TodoDataService.createTodo(username, todo)
    //             .then(() => this.props.navigate('/todos')) //REACT-6
    //         //this.props.history.push('/todos')
    //     } else {
    //         TodoDataService.updateTodo(username, this.state.id, todo)
    //             .then(() => this.props.navigate('/todos'))//REACT-6
    //         //this.props.history.push('/todos')
    //     }    
    // }

    render(){
        let desc = this.state.desc
        let targetDate = this.state.targetDate
        // let {desc, targetDate} = this.state
        // let { description, targetDate } = this.state
        return(
            <div>
                <h1>TODO</h1>
                <div className="container">
                {/* nested {} for Object */}
                {/* <Formik initialValues = {{desc, targetDate}} onSubmit = {this.onsubmit} validate = {this.validate}  */}
                <Formik onSubmit = {this.onSubmit} validate = {this.validate} initialValues = {{desc, targetDate}}
                    validateOnBlur={false} validateOnChange={false} enableReinitialize = {true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="desc" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        {this.state.desc}
                                        <Field className="form-control" type="text" name="desc"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent;