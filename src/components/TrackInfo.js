import React, { PropTypes } from 'react';

const TrackInfo = (props) => (
  <div>
    <p>{ `${props.title} - ${props.username}` }</p>
  </div>
);

TrackInfo.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string
};

export default TrackInfo;
