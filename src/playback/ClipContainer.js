import React from 'react';
import { connect } from 'react-redux';
import { setCurrentClipPlaying } from '../actions';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import '../App.css';

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
         style={{  height: '6.3vw', width: '11vw', borderRadius: 5, backgroundColor: props.component.currentClipPlayingId === props.video.bID ? 'yellow' : 'rgba(0,0,0,0.8)', margin: '.8vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)' }}
         className="hoverable"
         onClick={ () => props.component.setCurrentClipPlaying(props.video.bID)}>
      <img src={props.component.sServer + '/camstream/?cmd=fetch&session=' + props.component.sSess + '&file=' + props.video.sPreview + '.112x84'} alt='' height="86%" width="100%" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} />
      <p style={{ textAlign: 'center', color: props.component.currentClipPlayingId === props.video.bID ? 'rgba(0,0,0,0.9)' : 'white', fontSize: '.7vw', margin: 0, marginTop :'-.2vw' }}>{timestamp}</p> 
    </div>
  )
}

const ClipContainer = props => {
  return (
    <div style={ styles.clipContainerStyle }>

        { props.videoClipsRequested.length > 0 ?
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <FaChevronCircleLeft className="hoverable" style={{ height: '2.5vw', width: '2.5vw' }}  onClick={ () => alert('back clicked')} />
              {props.videoClipsRequested.map( v => <PreviewBlock key={v.bID} video={v} component={props} />)}
              <FaChevronCircleRight className="hoverable" style={{ height: '2.5vw', width: '2.5vw' }} onClick={ () => alert('forward clicked')} />
            </div> :
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaChevronCircleLeft className="hoverable" style={{ height: '2.5vw', width: '2.5vw' }}  onClick={ () => alert('back clicked')} />
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)' }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)'  }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)'  }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)'  }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)' }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)'  }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)'  }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)'  }} />
              </div>
              <div style={ styles.clipPlaceholderStyle }>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVzVtxIzD77TuNLFAf_HplOOfbvOMHxj8BBdzzUDNUu-bu4BWk&usqp=CAU'} alt='' height="100%" width="100%" style={{ borderRadius: '.5vw', boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.7)'  }} />
              </div>
              <FaChevronCircleRight className="hoverable" style={{ height: '2.5vw', width: '2.5vw' }} onClick={ () => alert('forward clicked')} />
            </div>
        }
    </div>
  )
}

const mapStateToProps = state => {
  const { videoClipsRequested, currentClipPlayingId } = state.playback;
  const { sSess } = state.auth;
  const { sServer } = state.server;
  return {
    videoClipsRequested,
    currentClipPlayingId,
    sSess,
    sServer
  }
}

export default connect(mapStateToProps, { setCurrentClipPlaying })(ClipContainer);

const styles = {
  clipContainerStyle: {
    position: 'relative',
    width: '90vw',
    margin: 'auto',
    marginTop: -4
  },
  clipPlaceholderStyle: {
    height: '6.3vw', 
    width: '11vw', 
    border: 'none', 
    borderRadius: '.5vw', 
    margin: '.8vw'
  }
}