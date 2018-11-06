import React, { Component } from 'react';
import calculatePearsonCorrelation from './../pearson.js';

//tells how to calculate the Pearson correlation based on the values (var1 and var2)
class Correlation extends Component {
    render() {
        return (
            <div>
                <h2>Correlation Result:</h2>
                <div>{calculatePearsonCorrelation(this.props.var1, this.props.var2)}</div>
            </div>
        );
    }
}

export default Correlation;