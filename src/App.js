import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'

import ShoeTypeInput from './Components/ShoeTypeInput'
import DrinkTypeInput from './Components/DrinkTypeInput'
import DataTable from './Components/data.js'
import Correlation from './Components/Correlation.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      var1: "",
      var2: "",

      pearson: 0,

      records: {
        var1: [],
        var2: []
      }
    };
  }

  handleValueChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  }

  handleAddVariables = e => {
    e.preventDefault();

    if (!this.state.var1 || !this.state.var2) {
      return;
    }

    this.state.records.var1.push(this.state.var1);
    this.state.records.var2.push(this.state.var2);

    this.setState(() => ({
      var1: "",
      var2: ""
    }));
  }

  handleClearVariables = e => {
    this.setState(() => ({
      var1: "",
      var2: "",

      pearson: 0,

      records: {
        var1: [],
        var2: []
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className = 'title'> Shoe Type vs Drink Type <br/> Correlation Study </h1>
        <br />
        <form>
          <div className="inputRow">
            <div className="whiteTextBox">
              <ShoeTypeInput label="Shoe Type" name="var1" value={this.state.var1} onChange={this.handleValueChange} />
              <small id="" className="form-text text-muted, whiteText">Sneakers = 0, Dress Shoes = 1, Sandals = 2</small>
            </div>
            <div className="whiteTextBox">
              <DrinkTypeInput label="Drink Type" name="var2" value={this.state.var2} onChange={this.handleValueChange} />
              <small id="" className="form-text text-muted, whiteText">Hot = 0, Cold = 1</small>
            </div>
          </div>
          <br />
          <div className="thingsInRow">
            <div className="box">
              <input style={{borderColor: 'lightgreen', borderWidth: '2.5px'}} type="button" value="Add to Data" onClick={this.handleAddVariables} />
            </div>
            
          </div>
        </form>
        <br />

        <h2 className="whiteTextWithUnder">Data Table</h2>
        <div className="thingsInRow, dataRow">
          <div className="boxWithWhiteText" type="" style={{borderRightColor: 'black'}}>
            <DataTable className="box" label="Shoe Type" values={this.state.records.var1} />
          </div>
          <div className="boxWithWhiteText">
            <DataTable className="box" label="Drink Type" values={this.state.records.var2} />
          </div>
        </div>
        <br />
        <div className="whiteTextWithUnder" id="result">
          <Correlation var1={this.state.records.var1} var2={this.state.records.var2} />
        </div>
        <br />
        <form>
        <div className="box">
              <input style={{borderColor: 'red', borderWidth: '4px'}} type="button" value="Clear All" onClick={this.handleClearVariables} />
            </div>
        </form>
      </div>
    );
  }
}

export default App;
