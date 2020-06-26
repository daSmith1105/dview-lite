import React from 'react';
import DateContainer from './DateContainer';
import { connect } from 'react-redux';
import { setFilter, setCamera, getVideo } from '../actions';
import { FaChevronCircleRight } from 'react-icons/fa';
import moment from 'moment';
import '../App.css';

const SearchContainer = props => {

  const handleCameraSelect = e => {
    e.preventDefault();
    props.setCamera(e.target.value);
  }

  const handleFilterChange = (type) => {
    console.log(type)
    props.setFilter(type)
  }

  const requestVideoEvents = () => {
    let flags = 0
    let date = moment(props.playbackDate).format('YYYYMMDDHHmmss');
    if(props.archiveFilterState && !props.exportFilterState){
      flags = 1;
    };
    if(!props.archiveFilterState && props.exportFilterState) {
      flags = 2;
    }

    props.getVideo('/JSON/', props.sSess, parseInt(props.playbackCamera), date, flags, 9)   // sServer, sSess, camID, sYMDHMS, bFlags, bNumEvents    0 - all, 1 -fArchive, 2 - fExport
  }

  return (
    <div style={ styles.serachContainerStyle }>

        <div>
          <p style={{ color: 'white', fontSize: '1.5vmin',  margin: '.2vw' }}>Camera</p>
          <select value={props.playbackCamera} onChange={ handleCameraSelect } style={{ borderRadius: 5, padding: '.1vw', fontSize: '1.5vmin' }}>
              {props.cameras.map( c => <option key={c.bID} value={c.bID} style={{ fontSize: '1.5vmin' }}>{c.sName}</option> )}
          </select>
        </div>

        <FaChevronCircleRight style={{ height: '3vmin', width: '3vmin', marginTop: '1vmin', color: 'lightgrey', opacity: 0.5 }} />

        <DateContainer />

        {/* <FaChevronCircleRight style={{ height: '3vmin', width: '3vmin', marginTop: '1vmin', color: 'lightgrey', opacity: 0.5 }} />

        <TimeContainer /> */}

        <FaChevronCircleRight style={{ height: '3vmin', width: '3vmin', marginTop: '1vmin', color: 'lightgrey', opacity: 0.5 }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: 'white', fontSize: '1.5vmin',  margin: '.2vw' }}>Filter(s): </p>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', alignItems: 'center'  }}>
              <input type='checkbox' checked={props.archiveFilterState} onChange={() => handleFilterChange('archive') } /> 
              <p style={{ color: 'white', margin: 0, fontSize: '1.5vmin', marginLeft: '.5vw',  whiteSpace: 'nowrap' }}>Archived</p>
            </div>

            <div style={{ display: 'flex', marginLeft: '.5vw', alignItems: 'center' }}>
              <input type='checkbox' checked={props.exportFilterState} onChange={() => handleFilterChange('export') } /> 
              <p style={{ color: 'white', margin: 0, fontSize: '1.5vmin', marginLeft: '.5vw', whiteSpace: 'nowrap' }}>Flagged for Export</p>
            </div>
          </div>
        </div>
  
        <FaChevronCircleRight style={{ height: '3vmin', width: '3vmin', marginTop: '1vmin', color: 'lightgrey', opacity: 0.5 }} />

        <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ requestVideoEvents }>
          Find Video
        </button>
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
    borderRadius: '1vw',
    position: 'relative',
    paddingBottom: '1vmin',
    backgroundColor: 'rgba(10,14,25,0.7)',
    // boxShadow: '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)',
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
    // margin: '.5vw',
    marginTop: '.4vw',
    borderRadius: 5,
    padding: '.2vw',
    paddingRight: '.4vw', 
    paddingLeft : '.4vw',
    border: 'none',
    // boxShadow: '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)'
  },

}