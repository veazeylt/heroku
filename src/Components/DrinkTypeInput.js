import React, { Component } from 'react';

class DrinkTypeInput extends Component {

    handleValueChange = e => {
        this.props.onChange(e);
    }

    render() {
        return (
            //wanted to use a dropdown menu with <select> and not <label> but when I did this I couldn't add the values to the data table and couldn't figure out how to fix it
            //this sets how the input box will look like and to change the value after the inputted value is added to the data table
            <label>
                {this.props.label}:
                <input style={{width: 100}} type="number" min="1" max="2" value={this.props.value} name={this.props.name} onChange={this.handleValueChange} />
            </label>

        );
    }
}

export default DrinkTypeInput;
