import React, { Component } from 'react';

import TrackItem from './TrackItem';

export default class TrackList extends Component {
  constructor(props, context) {
    super(props, context);

    this.renderTracks = this.renderTracks.bind(this);
  };

  renderTracks() {

  };

  render() {
    return (
      <table>
        <thead>
          <td>Title</td>
          <td>Artist</td>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}
