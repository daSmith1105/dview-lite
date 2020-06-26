import React from 'react';
import { connect } from 'react-redux';
import { setCurrentClipPlaying, getVideo } from '../actions';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import placeholderImage from '../images/placeholder.jpeg';
import '../App.css';

const placeholderArr = [1,2,3,4,5,6,7,8,9];

// archive = 1;  0001
// export = 2;   0010

const PreviewBlock = props => {
  const year = props.video.sTimestamp.slice(0,4);
  const month = props.video.sTimestamp.slice(4,6);
  const day = props.video.sTimestamp.slice(6,8);
  const hour = props.video.sTimestamp.slice(8,10);
  const min = props.video.sTimestamp.slice(10,12);
  const sec = props.video.sTimestamp.slice(12,14);
  const timestamp = `${month}/${day}/${year}  ${hour}:${min}:${sec}`

  return (
    <div key={props.video.bID} 
         style={{  
           height: '6.3vw', 
           width: '11vw',
          borderRadius: 5, 
          backgroundColor: props.component.currentClipPlayingId === props.video.bID ? 'rgba(40,120,255,0.6)' : 'rgba(0,0,0,0.8)', 
          margin: '.8vw', 
          // boxShadow: props.component.currentClipPlayingId === props.video.bID ? '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)' : '2px 2px 10px 1px rgba(0,0,0,0.7)' 
        }}
         className="hoverable"
         onClick={ () => props.component.setCurrentClipPlaying(props.video.bID)}>
      <img src={'/camstream/?cmd=fetch&session=' + props.component.sSess + '&file=' + props.video.sPreview + '.112x84'} alt='' height="86%" width="100%" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} />
      <p style={{ textAlign: 'center', color: 'white', fontSize: '.7vw', margin: 0, marginTop :'-.2vw' }}>{timestamp}</p> 
    </div>
  )
}

const ClipContainer = props => {
  
  // also need to call this when we run out of clips while playing
  const getNextClipset = () => {
    if(props.nextClipsetTimestamp !== '' && props.videoClipsRequested.length > 8){
      props.getVideo('/JSON/', props.sSess, parseInt(props.playbackCamera), props.nextClipsetTimestamp, 0, 9);
      return;
    }
    alert('No more clips for you!');
  };

  const getPreviousClipset = () => {
    // need to figure out how to get the nine clips before the provided timestamp
    if(props.prevClipsetTimestamp !== ''){
      props.getVideo('/JSON/', props.sSess, parseInt(props.playbackCamera), props.prevClipsetTimestamp, 0, 9);
      return;
    }
    alert('No previous clips for you!');
  };

  return (
    <div style={ styles.clipContainerStyle }>

        { props.videoClipsRequested.length > 0 ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <FaChevronCircleLeft className="hoverable" style={{ color: 'white', height: '2.5vw', width: '2.5vw' }}  onClick={ () => getPreviousClipset(props) } />
              {props.videoClipsRequested.map( v => <PreviewBlock key={v.bID} video={v} component={props} />)}
              <FaChevronCircleRight className="hoverable" style={{ color: 'white', height: '2.5vw', width: '2.5vw' }} onClick={ () => getNextClipset(props) } />
            </div> :
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaChevronCircleLeft style={{ color: 'grey', height: '2.5vw', width: '2.5vw' }} />
              { placeholderArr.map( c => 
                  <div key={c} style={ styles.clipPlaceholderStyle }>
                    <img src={placeholderImage } alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)' }} />
                  </div>
              )}
              <FaChevronCircleRight style={{ color: 'grey', height: '2.5vw', width: '2.5vw' }} />
            </div>
        }
    </div>
  )
}

const mapStateToProps = state => {
  const { videoClipsRequested, currentClipPlayingId, playbackCamera, nextClipsetTimestamp, prevClipsetTimestamp } = state.playback;
  const { sSess } = state.auth;
  const { sServer } = state.server;
  return {
    videoClipsRequested,
    currentClipPlayingId,
    playbackCamera,
    nextClipsetTimestamp,
    prevClipsetTimestamp,
    sSess,
    sServer
  }
}

export default connect(mapStateToProps, { setCurrentClipPlaying, getVideo })(ClipContainer);

const styles = {
  clipContainerStyle: {
    position: 'relative',
    width: '90vw',
    margin: 'auto',
    marginTop: -4,
    // backgroundColor: 'white',
    borderRadius: 10,
    paddingRight: '1.5vmin',
    paddingLeft: '1.5vmin',
    // boxShadow: '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)',
    backgroundColor: 'rgba(10,14,25,0.7)'
  },
  clipPlaceholderStyle: {
    height: '6.3vw', 
    width: '11vw', 
    border: 'none', 
    borderRadius: '.5vw', 
    margin: '.8vw'
  }
}