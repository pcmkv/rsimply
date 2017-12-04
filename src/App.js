import React, { Component } from 'react';
import './App.css';
import Content from './Conten';
import RegistrationForm from './RegistrationForm';

class App extends Component {
     colours = [{
        name: "Red",
        hex: "#F21B1B"
    }, {
        name: "Blue",
        hex: "#1B66F2"
    }, {
        name: "Green",
        hex: "#07BA16"
    }];
    constructor(props){
        super(props);
        this.state = {
            toggle:false,
            increment:0,
            selectedItem:null
        };
        this.getSelectedVal = this.getSelectedVal.bind(this);
        console.log(this.itemCar);
    }

    testFunc = () =>{
        this.setState({
            increment:this.state.increment+1
        });
    };

    getSelectedVal = (e) =>{
        console.log("EE",e);
        this.setState({
            selectedItem:e.target.value
        });
};

    showSelectedItem = () =>{
        alert(this.state.selectedItem);
    };


  render() {


    return (
      <div className="Test">
          {/*<button onClick={this.showSelectedItem.bind(this)} >Show</button>
          <select onChange={this.getSelectedVal} style={'marginBottom : 15px'}>
              {this.colours.map((elem, index)=> {
                  return(
                  <option value={elem.name} key={index} > {elem.name}</option>
                  )
              })
              }
          </select>*/}
          {this.state.increment}
          <Content name="Test" increment={this.testFunc.bind(this)} />
          <RegistrationForm />
      </div>
    );
  }
}

export default App;
