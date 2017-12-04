import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="Test">
          <p>{this.props.name}</p>
          <button onClick={this.props.increment}>click</button>
      </div>
    );
  }
}

export default Content;
