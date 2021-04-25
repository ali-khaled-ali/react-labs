import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      id:"1",
      jobTitleName:"Developer",
      firstName:"Ahmed",
      lastName:"Ali",
      preferredFullName:"Ahmed Ali",
      employeeCode:"E1",
      region:"CA",
      phoneNumber:"408-1234567",
      emailAddress:"ahmed.ali@gmail.com"
    }
  }

render() {
  return (
    <div>
    

      <div>
          <p>my name is: {this.state.preferredFullName}</p>
          <p>i work as a: {this.state.jobTitleName}</p>
          <p>my email is: {this.state.emailAddress}</p>
          <p>my phone is: {this.state.phoneNumber}</p>
        
      </div>


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
