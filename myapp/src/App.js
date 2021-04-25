import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{

render() {
  return (
    <div>
      <Counter/>
    </div>
    
  );
}
}
class Counter extends React.Component{

  constructor(){
    super();
    this.state={
      count:0
    }
  }

  increase=() => {

    this.setState({count: this.state.count+1})

  }

  decrease=() => {

    this.setState({count:this.state.count==0 ? this.state.count : this.state.count-1})

  }


  
    
  

  render(){
    return(
    <div>
      {this.state.count}
      <div>
          <button onClick={this.increase}>increase</button>
          <button onClick={this.decrease}>decrease</button>
      </div>
    </div>
  
    );}

}


export default App;
