import React, {Component}from 'react'

export default class States extends Component {
	constructor(){
			super();
			this.state={
			 name:"Venkat"

			}
			 	

	}
	clickMe=()=>{
		this.setState(
			{
				 name:"Rajesh"
      			
   			}
    	)

	
	}

	render() {
		return (
			<div>
				<h1>Here we are states</h1>
				<h2>{this.state.name}</h2> 
				<button onClick={()=>{this.clickMe()}}>Click me!</button>
			</div>
		);
	}
}