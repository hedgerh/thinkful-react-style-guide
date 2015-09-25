import React, { Component } from 'react';
import { Cover, PlayButton, Icons } from 'react-soundplayer/components'; 
import { SoundPlayerContainer } from 'react-soundplayer/addons';

import request from 'superagent';

import TrackList from './TrackList';

const { PlayIconSVG } = Icons;
const CLIENT_ID = 'f3ef438d3cc35d9fd575578905fc5510';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      track: {},
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
    this.setState({
      track: {
        title: title,
        username: username,
        stream_url: streamUrl
      }
    });
  };

  render() {
    console.log(this.state.track);
    return (
      <div>
        <SoundPlayerContainer
          clientId={CLIENT_ID}
          stream_url={ this.state.track.stream_url } >
            <TrackList
              tracks={ this.state.tracks }
              onTrackSelect={ this.onTrackSelect } />
        </SoundPlayerContainer>
      </div>
    );
  };
}
