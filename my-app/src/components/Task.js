import React, {Component} from 'react'

export default class Task extends React.Component {
  constructor(){
        super();
        this.state={
            value :0
        };
        
  }
    onClick=()=>{
      this.setState(
      {
        value:this.state.value + 1
      }
      );
    }
  
  render() {
    return (
      <div>
          <h1>Here we are states</h1>
          <div>{this.state.value}</div> 
          <button onclick={this.onClick}>Clickme...!</button>
      </div>
    );
  }
}
