import React from 'react';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    username: React.PropTypes.string
  },
  
  render() {
    return (
      <div>
        <p>{ this.props.title + ' - ' + this.props.username }</p>
      </div>
    );
  }
});