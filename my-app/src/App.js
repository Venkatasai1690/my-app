import React from 'react';
import logo from './logo.svg';
// import image from './src/Profile1.png';
import './App.css';
// import Hello from './Hello';
// import Greeting from "./components/Greeting"; 
// import Welcome from "./components/Welcome";
// import States from "./components/States";
// import Task from "./components/Task";
// import classState from "./components/classState";
// import Hooks from "./components/Hooks";
import data from "./data/data.json";
function App() {
  return (
      <div className="App">
     

      {/*<classState />
      <h1>Using Hooks</h1>
      <Task />*/}
      {/*  <Hooks />
       <h1>APSSDC REACTJS</h1>
      <h2>SAI RGUKT</h2>
      <Home name="RGUKT"/>
      <Hello> 


      <Hello/>
          <Greeting name="Venkata sai" mail="nagavsrgukr@gamil.com">
            <img src={logo}style={{width:"200px"}}/>
          </Greeting>
          <Greeting name="Hari" mail ="hari123@gmail.com">
            <p>Hello RGUKT</p>
            <p>Hello Venkata sai</p>
          </Greeting>
          <h1>We are creating Class Component&Pass the Props</h1>
          <Welcome name="Venkatasai" college="IIIT">
            <p>Hello Everyone</p>
          </Welcome>
            
          <Welcome name="Hari" college="IIIT">
             <p> Hello Hari How r u </p>
          </Welcome>*/}
         <Home />
      </div>
  );
}

let Home=()=>{
let profile=data.profiles;
  console.log(profile);
  return(
    
    <div className="row justify-content-center">
     {profile.map((value,index)=>(
      <div className="col-sm-10 col-md-4 col-lq-4 mt-1" key={index}>
        <div className="card">
          <div className="card-body">
            
            <h1>{value.basic.name}</h1>

            <h2>{value.basic.role}</h2>
            <h2>{value.basic.phone}</h2>
            <h2>{value.basic.email}</h2>
            <h2 className="btn btn-primary">Profile</h2>
          </div>
        </div>
      </div>
      ))
      } 
    </div>
  );
}


export default App;
