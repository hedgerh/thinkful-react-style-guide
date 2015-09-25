import React, { Component } from 'react';

export default class TrackItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.onTrackClick = this.onTrackClick.bind(this);
  };

  onTrackClick() {
    const { title, username, streamUrl } = this.props;

    this.props.onTrackSelect(title, username, streamUrl);
  };

  render() {
    return (
      <li onClick={ this.onTrackClick }>
        <p>{ this.props.title }</p>
        <p>{ this.props.username }</p>
      </li>
    );
  }
}