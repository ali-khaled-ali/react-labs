import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from 'react-dom';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class AddTask extends React.Component {

  constructor(){
      super();
      this.state ={
          content:"",
          state:"waiting",

      }
  }



  render(){
      return(
          <div className="input-group mb-3" style={{width:"70%"}}>
              <input type="text" className="form-control" placeholder="ADD NEW TASK HERE" onChange={(e)=>this.setState({content:e.target.value})} value={this.state.content}></input>
              <div className="input-group-append">
                  <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={()=>this.props.addTask(this.state)}>ADD</button>
              </div>
          </div>
      )
  }
}


export default AddTask;








// class App extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       id:"1",
//       jobTitleName:"Developer",
//       firstName:"Ahmed",
//       lastName:"Ali",
//       preferredFullName:"Ahmed Ali",
//       employeeCode:"E1",
//       region:"CA",
//       phoneNumber:"408-1234567",
//       emailAddress:"ahmed.ali@gmail.com"
//     }
//   }

// render() {
//   return (
//     <div>
    

//       <div>
//           <p>my name is: {this.state.preferredFullName}</p>
//           <p>i work as a: {this.state.jobTitleName}</p>
//           <p>my email is: {this.state.emailAddress}</p>
//           <p>my phone is: {this.state.phoneNumber}</p>
        
//       </div>


//       <Counter/>
//     </div>
    
//   );
// }
// }




// class Counter extends React.Component{

//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }

//   increase=() => {

//     this.setState({count: this.state.count+1})

//   }

//   decrease=() => {

//     this.setState({count:this.state.count==0 ? this.state.count : this.state.count-1})

//   }


  
    
  

//   render(){
//     return(
//     <div>
//       {this.state.count}
//       <div>
//           <button onClick={this.increase}>increase</button>
//           <button onClick={this.decrease}>decrease</button>
//       </div>
//     </div>
  
//     );}

// }


// export default App;
