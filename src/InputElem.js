import React, { Component } from 'react';

class InputElem extends Component {

    constructor(props){
        super(props);
        console.log("InputElem props",this.props);
        this.state = {
            inputField:null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        });
        console.log("inputField",this.state.inputField);
    }
  render() {
      const styleInput = {
          display: 'block',
          marginBottom: '15px',
          marginTop: '15px'
      };
    return (
      <input type={this.props.type} name={this.props.name} onChange={this.props.handlerFromParant} style={styleInput} className="form-control" />
    );
  }
}
export default InputElem;
