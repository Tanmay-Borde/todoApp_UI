import axios from "axios";

//Axios is a Promise which represents eventual completion (or failure) of an asynchronous operation
// .then (response => doWhat(response))
// .catch(error => handleError(response))
// https://github.com/axios/axios#example

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world');
        // console.log("Hello Service Executed....");
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name){
        // let username = 'tanmay64'
        // let password = 'sss'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            // {
            //     headers:{
            //         authorization: basicAuthHeader
            //     }
            // }
        );
    }

}



export default new HelloWorldService();