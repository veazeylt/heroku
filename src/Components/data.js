import React, { Component } from 'react';

//tells how to display values added to the data table
class DataTable extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p>{this.props.label}</p>
                <div className = "data-table-box" dangerouslySetInnerHTML = {{__html: this.props.values.join('<br />')}}>
                </div>
            </div>
        );
    }
}
 
export default DataTable;