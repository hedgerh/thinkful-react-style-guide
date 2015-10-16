import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" 
          value={ this.props.value } 
          onChange={ this.props.onInputChange } />
      </div>
    );
  }
}

SearchBar.PropTypes = {
  value: React.PropTypes.string,
  onInputChange: React.PropTypes.func
};