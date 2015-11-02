import React from 'react';

import TrackItem from './TrackItem';

export default React.createClass({
  propTypes: {
    tracks: React.PropTypes.array,
    onTrackSelect: React.PropTypes.func
  },

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Artist</td>
          </tr>
        </thead>
        <tbody>
          { this.props.tracks ? this.props.tracks.map((track, i) =>
              <TrackItem
                track={ track }
                onTrackSelect={ this.props.onTrackSelect }
                key={ i } /> ) : null }
        </tbody>
      </table>
    );
  }
});
