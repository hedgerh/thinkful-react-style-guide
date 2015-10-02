import React, { Component } from 'react';
import request from 'superagent';

import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Cover, PlayButton } from 'react-soundplayer/components'; 

import TrackList from './TrackList';

const CLIENT_ID = 'f3ef438d3cc35d9fd575578905fc5510';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentTrack: {},
      tracks: []
    };

    this.onTrackSelect = this.onTrackSelect.bind(this);
  };

  componentDidMount() {
    request
      .get('https://api.soundcloud.com/tracks?client_id=' + CLIENT_ID)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        this.setState({
          tracks: res.body
        });
      });
  };

  onTrackSelect(title, username, streamUrl) {

  };

  render() {
    return (
      <div>

      </div>
    );
  };
}
