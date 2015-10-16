import React, { Component } from 'react';

export default class TrackItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.onTrackClick = this.onTrackClick.bind(this);
  };

  onTrackClick(event) {
    const { title, username, streamUrl } = this.props;

    this.props.onTrackSelect(title, username, streamUrl);
  };

  render() {
    return (
      <tr onClick={ this.onTrackClick }>
        <td>{ this.props.title }</td>
        <td>{ this.props.username }</td>
      </tr>
    );
  }
}