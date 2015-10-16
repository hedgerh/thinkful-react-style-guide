import React, { Component } from 'react';

import TrackItem from './TrackItem';

export default class TrackList extends Component {
  constructor(props, context) {
    super(props, context);

    this.renderTracks = this.renderTracks.bind(this);
  };

  renderTracks() {
    return (this.props.tracks && this.props.tracks.map) ? this.props.tracks.map((track, i) => {
      return (
        <TrackItem
          title={track.title}
          username={ track.user.username }
          streamUrl={ track.stream_url }
          onTrackSelect={ this.props.onTrackSelect }
          key={ i } />
      );
    }) : null;
  };

  render() {
    return (
      <table>
        <thead>
          <td>Title</td>
          <td>Artist</td>
        </thead>
        <tbody>
          { this.renderTracks() }
        </tbody>
      </table>
    );
  }
}
