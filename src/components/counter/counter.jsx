import React, { Component } from "react";
import './counter.css'

class Counter extends Component{
    
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return(
            <div>
                <CounterBtn by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
                <CounterBtn by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
                <CounterBtn by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement} /><br></br>
                <span className="count" style={{fontSize: "40px" }}>
                    {this.state.counter}    
                </span><br></br><br></br>
                <div>
                    <button className="reset" onClick={this.reset}>RESET</button>
                </div>
            </div>
        );
    }

    reset(){
        this.setState(
            {counter: 0}
        );
    }

    // increment(by){
    //     this.setState({
    //         counter: this.state.counter + by
    //     });
    // }

    increment(by){
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        )
    }

}

class CounterBtn extends Component{
    //define the initial state in a constructor
    //state(counter) = 0

    constructor(){
        super();
        this.state = {
            counter : 0
        }
        //this.increment = this.increment.bind(this);   //when arrow fun, no need of binding
         this.decrement = this.decrement.bind(this);
    }

    render = () => {
        const btnColor = {backgroundColor : "black"}
        return(
            <div className="counter">
                <br/>
                {/* <button style={btnColor} onClick={this.increment}> +1 </button>&emsp; */}
                <button style={btnColor} onClick={this.increment}> +{this.props.by} </button>&emsp;
                <button style={btnColor} onClick={this.decrement}> -{this.props.by} </button>&emsp;
                <span className="count" style={{fontSize : "40px"}} > {this.state.counter} </span>&emsp;
            </div>
        )
    }
    increment = () => {
        //this.state.counter++;
        this.setState({
            // counter: this.state.counter + 1
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
        
    }

    decrement() {
        this.setState({
            counter: this.state.counter - this.props.by
        });
        this.props.decrementMethod(this.props.by);
    }
    
}

CounterBtn.defaultProps = {
    by : 1
}

// Counter.propTypes = {
//     by : PropTypes.number
// }

export default Counter