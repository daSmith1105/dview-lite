import React from 'react';
import { connect } from 'react-redux';
import { setCurrentClipPlaying, getVideo } from '../../actions';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import placeholderImage from '../../images/placeholder.jpeg';
import '../../App.css';

const placeholderArr = [1,2,3,4,5];

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
         style={{  height: '17vw', width: '15vw', borderRadius: 5, backgroundColor: props.component.currentClipPlayingId === props.video.bID ? 'rgba(40,120,255,0.6)' : 'rgba(0,0,0,0.8)', boxShadow: props.component.currentClipPlayingId === props.video.bID ? '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)' : '2px 2px 10px 1px rgba(0,0,0,0.7)' }}
         className="hoverable"
         onClick={ () => props.component.setCurrentClipPlaying(props.video.bID)}>
      <img src={props.component.sServer + '/camstream/?cmd=fetch&session=' + props.component.sSess + '&file=' + props.video.sPreview + '.112x84'} alt='' height="86%" width="100%" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} />
      <p style={{ textAlign: 'center', color: 'white', fontSize: 8, margin: 0, marginTop :'-.2vw' }}>{timestamp}</p> 
    </div>
  )
}

const ClipContainerM = props => {
  
  // also need to call this when we run out of clips while playing
  const getNextClipset = () => {
    if(props.nextClipsetTimestamp !== '' && props.videoClipsRequested.length > 4){
      props.getVideo('/JSON/', props.sSess, parseInt(props.playbackCamera), props.nextClipsetTimestamp, 0, 5);
      return;
    }
    alert('No more clips for you!');
  };

  const getPreviousClipset = () => {
    // need to figure out how to get the nine clips before the provided timestamp
    if(props.prevClipsetTimestamp !== ''){
      props.getVideo('/JSON/', props.sSess, parseInt(props.playbackCamera), props.prevClipsetTimestamp, 0, 5);
      return;
    }
    alert('No previous clips for you!');
  };

  return (
    <div style={ styles.clipContainerStyle }>

        { props.videoClipsRequested.length > 0 ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
              <FaChevronCircleLeft className="hoverable" style={{ color: 'white', height: 20, width: 20 }}  onClick={ () => getPreviousClipset(props) } />
              {props.videoClipsRequested.map( v => <PreviewBlock key={v.bID} video={v} component={props} />)}
              <FaChevronCircleRight className="hoverable" style={{ color: 'white', height: 20, width: 20 }} onClick={ () => getNextClipset(props) } />
            </div> :
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <FaChevronCircleLeft style={{ color: 'grey', height: 20, width: 20 }} />
              { placeholderArr.map( c => 
                  <div key={c} style={ styles.clipPlaceholderStyle }>
                    <img src={placeholderImage } alt='' height="100%" width="100%" style={{ borderRadius: 5, boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)' }} />
                  </div>
              )}
              <FaChevronCircleRight style={{ color: 'grey', height: 20, width: 20 }} />
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

export default connect(mapStateToProps, { setCurrentClipPlaying, getVideo })(ClipContainerM);

const styles = {
  clipContainerStyle: {
    width: '98vw',
    height: '23vw',
    margin: 'auto',
    padding: 2,
    paddingTop: 4,
    paddingBottom: 14,
    boxShadow: '1px 1px 2px 1px rgba(40,120,255,0.6), -1px -1px 2px 1px rgba(40,120,255,0.6)',
    backgroundColor: 'rgba(10,14,25,0.7)',
    marginTop: 5
  },
  clipPlaceholderStyle: {
    height: '17vw', 
    width: '15vw', 
    border: 'none', 
    borderRadius: 5
  }
}