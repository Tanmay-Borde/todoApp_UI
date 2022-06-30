import './App.css';
import { Component } from 'react';
// import FirstCOmponent, { DummyComponent } from './components/learning-examples/FirstComponent';   //exports other than defaults need { }
// import SecondComponent from './components/learning-examples/SecondComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
// import CounterBtn from './components/counter/counter';
// import Counter from './components/counter/counter';
import TodoApp from './components/ToDo/TodoApp';
import './bootstrap.css';
import './bootstrap.min.css.map';

class App extends Component {
  render(){
    return (
      <div className='App'>
        {/* Hello Tanmay...! */}
        {/* <FirstCOmponent></FirstCOmponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <DummyComponent></DummyComponent>
        <LearningComponents></LearningComponents> */}
        {/* <Counter></Counter> */}
        {/* default by value created in counter.jsx */}
        {/* <CounterBtn/>
        <CounterBtn by={5}></CounterBtn>
        <CounterBtn by={10}></CounterBtn> */}
        <TodoApp></TodoApp>
      </div>
    );
  }
}

export default App;