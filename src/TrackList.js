import React, { Component } from 'react';

import TrackItem from './TrackItem';

export default class TrackList extends Component {
  constructor(props, context) {
    super(props, context);

    this.renderTracks = this.renderTracks.bind(this);
  };

  renderTracks() {
    return this.props.tracks ? this.props.tracks.map(track => {
      return (
        <TrackItem
          title={track.title}
          username={track.user.username}
          streamUrl={ track.stream_url } 
          onTrackSelect={ this.props.onTrackSelect } />
      );
    }) : null;
  };

  render() {
    return (
      <ul>
        { this.renderTracks() }
      </ul>
    );
  }
}
