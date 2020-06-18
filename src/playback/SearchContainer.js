import React from 'react';
import DateContainer from './DateContainer';
import TimeContainer from './TimeContainer';
import { connect } from 'react-redux';
import { setFilter, setCamera, getVideo } from '../actions';
import '../App.css';
import moment from 'moment';

const SearchContainer = props => {

  const handleCameraSelect = e => {
    e.preventDefault();
    const camObj = props.cameras.find(c => c.bID.toString() === e.target.value.toString());
    props.setCamera(e.target.value, camObj);
  }

  const handleFilterChange = (type) => {
    console.log(type)
    props.setFilter(type)
  }

  const searchPos = () => {
    alert('search pos clicked');
  }

  const requestVideoEvents = () => {
    let flags = 0
    let date = props.playbackDate.split('-').join(" ").replace(/\s/g,'');
    let time = props.playbackTime.split(':').join(" ").replace(/\s/g,'') + '00';
    let dateTime = date + time;
    // if(props.archiveFilterState && !props.exportFilterState){
    //   flags = 1;
    // };
    // if(!props.archiveFilterState && props.exportFilterState) {
    //   flags = 2;
    // }

    props.getVideo('/JSON/', props.sSess, parseInt(props.playbackCamera), dateTime, flags, 9)   // sServer, sSess, camID, sYMDHMS, bFlags, bNumEvents    0 - all, 1 -fArchive, 2 - fExport
  }

  return (
    <div style={ styles.serachContainerStyle }>
      <p style={ styles.labelStyle }>Search</p>

        <div>
          <p style={{ fontSize: '1.5vmin',  margin: '.2vw' }}>Camera</p>
          <select value={props.playbackCamera} onChange={ handleCameraSelect } style={{ padding: '.1vw', fontSize: '1.5vmin' }}>
              {props.cameras.map( c => <option key={c.bID} value={c.bID} style={{ fontSize: '1.5vmin' }}>{c.sName}</option> )}
          </select>
        </div>

        <DateContainer />
        <TimeContainer />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{ fontSize: '1.5vmin',  margin: '.2vw' }}>Filter(s): </p>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              <input type='checkbox' value={props.archiveFilterState} checked={props.archiveFilterState} onChange={() => handleFilterChange('archive') } /> 
              <p style={{ margin: 0, fontSize: '1.5vmin', marginLeft: '.5vw',  whiteSpace: 'nowrap' }}>Archived</p>
            </div>

            <div style={{ display: 'flex', marginLeft: '2vw' }}>
              <input type='checkbox' value={props.exportFilterState} checked={props.exportFilterState} onChange={() => handleFilterChange('export') } /> 
              <p style={{ margin: 0, fontSize: '1.5vmin', marginLeft: '.5vw', whiteSpace: 'nowrap' }}>Flagged for Export</p>
            </div>
          </div>
        </div>
  
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ requestVideoEvents }>
            Find Video
          </button>
          <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ () => searchPos() }>
            POS Search
          </button>
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  const { archiveFilterState, exportFilterState, playbackCamera, playbackDate, playbackTime } = state.playback;
  const { cameras } = state.server;
  const { sSess } = state.auth;
  return {
    archiveFilterState,
    exportFilterState,
    playbackCamera,
    playbackDate, 
    playbackTime,
    cameras,
    sSess
  }
}

export default connect(mapStateToProps,{ setFilter, setCamera, getVideo })(SearchContainer);


const styles = {
  serachContainerStyle: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    width: '90vw', 
    margin: 'auto', 
    border: '2px solid grey',
    borderRadius: '1vw',
    position: 'relative'
  },
  labelStyle: {
    padding: 0, 
    fontSize: '1vw', 
    color: 'black', 
    backgroundColor: 'white', 
    position: 'absolute', 
    top: '-1.8vw', 
    left: 20, 
    paddingRight: '.5vw', 
    paddingLeft: '.5vw' 
  },
  rowStyle: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center',
    marginTop: '1vw',
  },
  rowCenterStyle: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center',
    marginTop: '2vw',
    marginBottom: '.5vw',
    width: '100%'
  },
  buttonGroupButtonStyle: {
    fontSize: '1.5vmin',
    margin: '.5vw',
    borderRadius: 5,
    padding: '.2vw',
    paddingRight: '.4vw', 
    paddingLeft : '.4vw',
    border: 'none'
  },

}