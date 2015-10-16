import React, { Component } from 'react';
import request from 'superagent';

import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton } from 'react-soundplayer/components'; 

import TrackList from './TrackList';
import SearchBar from './SearchBar';

const CLIENT_ID = 'f3ef438d3cc35d9fd575578905fc5510';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentTrack: {},
      tracks: [],
      inputValue: ''
    };

    this.onTrackSelect = this.onTrackSelect.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.filterTracks = this.filterTracks.bind(this);
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
      currentTrack: {
        title: title,
        username: username,
        streamUrl: streamUrl
      }
    });
  };

  onInputChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  };

  filterTracks() {
    const { inputValue } = this.state;

    return (inputValue) ? this.state.tracks.filter(track => {
      return track.title.indexOf(inputValue) === 0;
    }) : this.state.tracks;
  }

  render() {
    const { title, username } = this.state.currentTrack;
    const currentTrack = (title && username) ? `${this.state.currentTrack.title} - ${this.state.currentTrack.username}` : '';

    return (
      <div>
        <div>
          <p>{ currentTrack }</p>
        </div>
        <SoundPlayerContainer
          clientId={CLIENT_ID}
          streamUrl={ this.state.currentTrack.streamUrl ? this.state.currentTrack.streamUrl : ' ' } >
            <PlayButton />
        </SoundPlayerContainer>
        <SearchBar
          value={ this.state.inputValue }
          onInputChange={ this.onInputChange } />
        <TrackList
          tracks={ this.filterTracks() }
          onTrackSelect={ this.onTrackSelect } />
      </div>
    );
  };
}
