import React, { Component } from 'react';

export default class State extends Component {
  constructor(props){
    super(props);
    this.state= {
      name: 'Rodrigo',
      sobre: 'Junior'
    };
  }

  render() {
    const {name , sobre}= this.state;
    return (
      <div>
        <p>
          {name}
        </p>
        <p>
        {sobre}
      </p>
    </div>
    );
  }
}