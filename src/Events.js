import React, {Component} from 'react';

export default class Events extends Component {
  constructor(props){
    super(props);
    this.state= {
      clicked : 0
    }
    //this.clickMetod= this.clickMetod.bind(this);
  }

  //Aero function, nesse caso não precisa istanciar no construtor.
  //static method
  clickMetod= () =>{
    console.log("Antes do click", this.state.clicked);
    this.setState({
      clicked : this.state.clicked +1
    });
    console.log("Depois do click", this.state.clicked);
  }

  render(){
    return(
      <div>
        <button onClick={this.clickMetod} type='button'>Click-me</button>
      </div>
    );
  }
}