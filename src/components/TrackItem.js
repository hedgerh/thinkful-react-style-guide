import React from 'react';

export default React.createClass({
  propTypes: {
    track: React.PropTypes.object
  },

  render() {
    return (
      <tr onClick={ () => this.props.onTrackSelect(this.props.track.id) }>
        <td>{ this.props.track.title }</td>
        <td>{ this.props.track.user.username }</td>
      </tr>
    );
  }
});