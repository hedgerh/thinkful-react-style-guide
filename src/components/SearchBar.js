import React, { Component, PropTypes } from 'react';

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

SearchBar.propTypes = {
  value:PropTypes.string,
  onInputChange: PropTypes.func
}

