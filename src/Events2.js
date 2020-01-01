import React, {Component} from 'react';

export default class Events2 extends Component {
  constructor (props) {
    super(props);
    this.state= {
      name : '',
      on : '',
      data : []
    }
  }

  handleChange= (event) => {
    this.setState({
      [event.target.name] : event.target.value,
      [event.target.name] : event.target.value
    });

    console.log("Value event", this.state);
  }

  insertToData= () => {
    const arr = this.state.data;
    arr.push(this.state.name);
    this.setState({
      name : '',
      data : arr
    });

    //ou
    //this.state.data.push(this.state)

    console.log(this.state);
  }

  render () {
    const {data} = this.state;
    return(
      <div>
        <input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Entre com seu nome"/>
        <input type="text" onChange={this.handleChange} name="on" id="name" placeholder="Entre com seu nome"/>
        <button type="button" onClick={this.insertToData}>OK</button>

        <ul>
          {
            data.map(item => (
              <li key={item}>
                {item}
              </li>
            ))
          }
        </ul>

      </div>
    )
  }
}
