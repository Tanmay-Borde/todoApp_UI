import axios from "axios";

class TodoDataService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todo`)
    }

    retrieveTodo(name, id){
        return axios.get(`http://localhost:8080/users/${name}/todo/${id}`);
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todo/${id}`);
    }

    updateTodo(name, id, todo){
        return axios.put(`http://localhost:8080/users/${name}/todo/${id}`, todo);
    }

    createTodo(name, todo){
        return axios.post(`http://localhost:8080/users/${name}/todo/`, {todo}, {headers: {"Content-Type": "application/json"}});
    }

}

export default new TodoDataService()