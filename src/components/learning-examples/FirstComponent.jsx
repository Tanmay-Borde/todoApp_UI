import React from "react";
import { Component } from "react";      //exports other than defauls need { }

export default class FirstCOmponent extends Component{
    render(){
      return(
        <div className='FirstName'>
          1st Class Component....
        </div>
      );
    }
}

export class DummyComponent extends Component{
    render(){
        return(
            <div>
                This is a Dummy Component....
            </div>
        );
    }
}