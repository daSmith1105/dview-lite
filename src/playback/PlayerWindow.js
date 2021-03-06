import React from 'react';
import { connect } from 'react-redux';
import { setCurrentClipPlaying, setPlaybackRate, setCamera, getVideo } from '../actions';
import moment from 'moment';
import poster_img from '../images/poster_img.png';
import '../App.css';

let node;

class PlayerWindow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clipTimer: 0,
      isPaused: false,
      currentTime: moment(this.props.currentClipPlayingTimestamp).format('HH:mm:ss')
    }
    this.video = React.createRef();
  }

  componentDidMount = () => {
    this.props.setCamera(1);
    node = this.video.current;
    node.addEventListener("ended", this.incrementVideoClip);
    node.addEventListener("error", this.throwVideoError);
    node.addEventListener("timeupdate", this.updateTime);
    if(node.playbackRate !== this.props.playbackRate) {
      node.playbackRate = this.props.playbackRate
    };
  }

  componentDidUpdate = () => {
    if(node.playbackRate !== this.props.playbackRate) {
      node.playbackRate = this.props.playbackRate
    };
  }

  updateTime = () => {
    let date = moment(this.props.currentClipPlayingTimestamp).add(node.currentTime, 's').toDate();
    this.setState({ currentTime: moment(date).format('HH:mm:ss') });
  }

  throwVideoError = () => {
    console.log('error');
  }

  setPlaybackRate = (rate) => {
    node.playbackRate = rate;
    this.props.setPlaybackRate(rate);
  }

  getNextClipset = () => {
    if(this.props.nextClipsetTimestamp !== ''){
      this.props.getVideo('/JSON/', this.props.sSess, parseInt(this.props.playbackCamera), this.props.nextClipsetTimestamp, 0, 9);
    }
    return;
  };

  getPreviousClipset = () => {
    if(this.props.prevClipsetTimestamp !== ''){
      this.props.getVideo('/JSON/', this.props.sSess, parseInt(this.props.playbackCamera), this.props.prevClipsetTimestamp, 0, 9);
    }
    return;
  };

  incrementVideoClip = () => {
    const index = this.props.videoClipsRequested.findIndex(c => c.bID === this.props.currentClipPlayingId );

    if(this.props.videoClipsRequested[index + 1]) {
      const nextId = this.props.videoClipsRequested[index + 1].bID
      this.props.setCurrentClipPlaying(nextId);
      this.setState({ 
        currentTime: moment(this.props.currentClipPlayingTimestamp).format('HH:mm:ss')
      })
    } else {
      // if we have come to the end of our last preview clip we need to grab the next nine clips
      this.getNextClipset();
      const nextId = this.props.videoClipsRequested[0].bID
      this.props.setCurrentClipPlaying(nextId);
      this.setState({ 
        currentTime: moment(this.props.currentClipPlayingTimestamp).format('HH:mm:ss')
      })
    }
  }

  render() {

    return (
      <div style={ styles.playerContainerStyle }>

      {/* cam name and timestamp */}
      { this.props.currentClipPlayingTimestamp && this.props.currentClipPlayingTimestamp.length > 0 && this.props.currentClipPlayingCameraId ?
          <div style={{ zIndex: 20, backgroundColor: 'rgba(0,0,0,1)', position: 'absolute', bottom: -14, left: 0, right: 0, margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '.2vw', boxShadow: '0px -4px 5px 0px rgba(0,0,0,0.5)' }}>
            <p style={{ margin: 0, marginBottom: '.5vmin', padding: 0, fontSize: '1.5vmin', color: 'white' }}>{ this.props.cameras.find( c => c.bID.toString() === this.props.currentClipPlayingCameraId.toString()).sName}</p>
            <p style={{ margin: 0, marginBottom: '.5vmin', padding: 0, fontSize: '1.5vmin', marginLeft: '18vw', color: 'white' }}>{moment(this.props.currentClipPlayingTimestamp).format('MM/DD/yyyy')} {this.state.currentTime}</p>
          </div> :
          <div style={{ zIndex: 20, backgroundColor: 'rgba(0,0,0,1)', position: 'absolute', bottom: -14, left: 0, right: 0, margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '.3vw', boxShadow: '0px -4px 5px 0px rgba(0,0,0,0.5)' }}>
            <p style={{ margin: 0, padding: 0, fontSize: '1.5vmin', color: 'transparent' }}>none</p>
            <p style={{ margin: 0, padding: 0, fontSize: '1.5vmin', marginLeft: '18vw', color: 'transparent' }}>none</p>
          </div>
      }

       <video ref={this.video}
              // src={ testVideo } 
              src={ '/camstream/?cmd=fetch&session=' + this.props.sSess + '&file=' + this.props.currentClipPlayingUrl } 
              poster={poster_img}
              style={ styles.videoPlayerStyle }
              type="video/mp4"
              muted
              autoPlay
              playsInline
              controls >
          Sorry, your browser doesn't support viewing this video. PLease try viewing using another browser.
        </video>
        { this.props.currentClipPlayingTimestamp && this.props.currentClipPlayingTimestamp.length ?
          <div style={{ position: 'absolute', top: '1vw', right: '-10vw' }}>
            <p style={{ color: 'white', margin: 0, fontSize: '1.6vmin', marginBottom: '.5vmin' }}>speed</p>
            <button 
                className="hoverableButton"
                style={{ fontSize: '1.3vmin', color: this.props.playbackRate === 0.5 ? 'white' : 'black', backgroundColor: this.props.playbackRate === 0.5 ? 'dodgerblue' : 'white', borderRadius: 5, margin: '.2vw', boxShadow: '1px 1px 2px 2px rgba(40,120,255,0.6), -1px -1px 2px 1px rgba(40,120,255,0.6)'  }}
                onClick={ () => this.setPlaybackRate(0.5)}>
              0.5
            </button>
            <button 
                className="hoverableButton"
                style={{ fontSize: '1.3vmin', color: this.props.playbackRate === 1 ? 'white' : 'black', backgroundColor: this.props.playbackRate === 1 ? 'dodgerblue' : 'white', borderRadius: 5, margin: '.2vw', boxShadow: '1px 1px 2px 2px rgba(40,120,255,0.6), -1px -1px 2px 1px rgba(40,120,255,0.6)' }}
                onClick={ () => this.setPlaybackRate(1.0)}>
              1.0
            </button>
            <br />
            <button 
                className="hoverableButton"
                style={{ fontSize: '1.3vmin', color: this.props.playbackRate === 2 ? 'white' : 'black', backgroundColor: this.props.playbackRate === 2 ? 'dodgerblue' : 'white', borderRadius: 5, margin: '.2vw', boxShadow: '1px 1px 2px 2px rgba(40,120,255,0.6), -1px -1px 2px 1px rgba(40,120,255,0.6)' }}
                onClick={ () => this.setPlaybackRate(2.0)}>
              2.0
            </button>
            <button 
                className="hoverableButton"
                style={{ fontSize: '1.3vmin', color: this.props.playbackRate === 4 ? 'white' : 'black', backgroundColor: this.props.playbackRate === 4 ? 'dodgerblue' : 'white', borderRadius: 5, margin: '.2vw', boxShadow: '1px 1px 2px 2px rgba(40,120,255,0.6), -1px -1px 2px 1px rgba(40,120,255,0.6)' }}
                onClick={ () => this.setPlaybackRate(4.0)}>
              4.0
            </button>
          </div> :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { videoClipsRequested, currentClipPlayingId, currentClipPlayingUrl, currentClipPlayingTimestamp, currentClipPlayingCameraId, currentClipPlayingDuration, playbackRate, playbackCamera, nextClipsetTimestamp, prevClipsetTimestamp } = state.playback;
  const { sSess } = state.auth;
  const { sServer, cameras } = state.server;
  return {
    videoClipsRequested,
    currentClipPlayingId,
    currentClipPlayingUrl,
    currentClipPlayingTimestamp,
    currentClipPlayingCameraId,
    currentClipPlayingDuration,
    playbackRate,
    playbackCamera,
    nextClipsetTimestamp, 
    prevClipsetTimestamp,
    sSess,
    sServer,
    cameras
  }
}

export default connect(mapStateToProps, { setCurrentClipPlaying, setPlaybackRate, setCamera, getVideo })(PlayerWindow);

const styles = {
  playerContainerStyle: {
    height: '34vw',
    width: '70vw',
    margin: 'auto',
    marginTop: '.7vw', 
    marginBottom: 30,
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.7)',
    // boxShadow: '2px 16px 4px 2px rgba(40,120,255,0.4), -2px -2px 4px 2px rgba(40,120,255,0.4), 2px 2px 4px 2px rgba(40,120,255,0.4), -2px 2px 4px 2px rgba(40,120,255,0.4)',
  },
  videoPlayerStyle: {
    width:'100%',
    height: '100%'
  }
}