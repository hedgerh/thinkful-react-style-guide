import React, { PropTypes } from 'react';

const TrackItem = (props) => (
  <tr onClick={ () => props.onTrackSelect(props.id) }>
    <td>{ props.title }</td>
    <td>{ props.username }</td>
  </tr>
);

TrackItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  username: PropTypes.string,
  onTrackSelect: PropTypes.func
};

export default TrackItem;