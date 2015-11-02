import React, { PropTypes } from 'react';
import TrackItem from './TrackItem';

const TrackList = (props) => (
  <table>
    <thead>
      <tr>
        <td>Title</td>
        <td>Artist</td>
      </tr>
    </thead>
    <tbody>
      { props.tracks ? props.tracks.map((track, i) =>
        <TrackItem
          id={ track.id }
          title={ track.title }
          username={ track.user.username }
          onTrackSelect={ props.onTrackSelect }
          key={ i } />
        ) : null }
    </tbody>
  </table>
);

TrackList.propTypes = {
  tracks: PropTypes.array,
  onTrackSelect: PropTypes.func
};

export default TrackList;
