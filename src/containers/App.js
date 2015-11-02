import React, { Component } from 'react';
import request from 'superagent';

import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton } from 'react-soundplayer/components'; 

import TrackInfo from '../components/TrackInfo';
import TrackList from '../components/TrackList';

const CLIENT_ID = 'f3ef438d3cc35d9fd575578905fc5510';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTrackId: -1,
      tracks: [],
      tracksById: {}
    };

    this.onTrackSelect = this.onTrackSelect.bind(this);
  };

  /**
   * Fetches a random list of tracks from Soundcloud on mount.
   */
  componentDidMount() {
    request
      .get('https://api.soundcloud.com/tracks?client_id=' + CLIENT_ID)
      .set('Content-Type', 'application/json')
      .on('error', (err) => console.error(new Error(err)))
      .end((err, res) => {
        // Map each track to its id key inside an object.
        // This lets us look up tracks by id.
        let tracksById = res.body.reduce((obj, track) => {
          obj[track.id] = track;
          return obj;
        }, {});

        this.setState({
          tracks: res.body,
          tracksById
        });
      });
  }

  /**
   * When a track is selected from the list,
   * its id is set to be the activeTrackId.
   * @param  {number} id ID of selected song
   * @return {null} Null if track doesn't exist
   */
  onTrackSelect(id) {
    if (!this.state.tracksById[id]) {
      return;
    }

    this.setState({
      activeTrackId: id
    });
  }

  render() {
    // Get the current active track
    const { activeTrackId, tracksById } = this.state;
    const track = tracksById[activeTrackId] || null;

    return (
      <div>
        { track ? <TrackInfo
          title={ track.title }
          username={ track.user.username }/> : null }
        <SoundPlayerContainer
          clientId={ CLIENT_ID }
          streamUrl={ track ? track.stream_url : '' } >
            <PlayButton />
        </SoundPlayerContainer>
        <TrackList
          tracks={ this.state.tracks }
          onTrackSelect={ this.onTrackSelect } />
      </div>
    );
  }
}
