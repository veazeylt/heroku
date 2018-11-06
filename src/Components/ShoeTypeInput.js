import React, { Component } from 'react';

class ShoeTypeInput extends Component {

    handleValueChange = e => {
        this.props.onChange(e);
    }

    render() {
        return (
            //same as DrinkTypeInput.js
            <label>
                {this.props.label}:
                <input style={{width: 100}} type="number" min="1" max="3" value={this.props.value} name={this.props.name} onChange={this.handleValueChange} />
            </label>

        );
    }
}

export default ShoeTypeInput;
