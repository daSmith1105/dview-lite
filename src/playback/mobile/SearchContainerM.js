import React from 'react';
import DateContainerM from './DateContainerM';
import { connect } from 'react-redux';
import { setFilter, setCamera, getVideo } from '../../actions';
import moment from 'moment';
import '../../App.css';

const SearchContainerM = props => {

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

    props.getVideo('/JSON/', props.sSess, parseInt(props.playbackCamera), date, flags, 5)   // sServer, sSess, camID, sYMDHMS, bFlags, bNumEvents    0 - all, 1 -fArchive, 2 - fExport
  }

  return (
    <div style={ styles.serachContainerStyle }>

        <div style={{ width: '50%', marginTop :5}}>
          <select value={props.playbackCamera} onChange={ handleCameraSelect } style={{ borderRadius: 5, padding: '.1vw', fontSize: 14, width: '90%', marginBottom: 10 }}>
              {props.cameras.map( c => <option key={c.bID} value={c.bID} style={{ fontSize: '1.5vmin' }}>{c.sName}</option> )}
          </select>
          <DateContainerM />
          <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ requestVideoEvents }>
            Find Video
          </button>
        </div>


        <div style={{ width: '50%', marginTop: 10 }}>
          <p style={{ color: 'white', fontSize: 14,  margin: '.2vw' }}>Filter(s): </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
            <p style={{ color: 'white', margin: 0, fontSize: 13, marginRight: '2vw',  whiteSpace: 'nowrap' }}>Archived</p>
            <input type='checkbox' checked={props.archiveFilterState} onChange={() => handleFilterChange('archive') } /> 
          </div>
          <div style={{ display: 'flex', marginLeft: '4vw', alignItems: 'center',  justifyContent: 'center', marginTop : 10 }}>
            <p style={{ color: 'white', margin: 0, fontSize: 13, marginRight: '2vw', whiteSpace: 'nowrap' }}>Export</p>
            <input type='checkbox' checked={props.exportFilterState} onChange={() => handleFilterChange('export') } /> 
          </div>
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

export default connect(mapStateToProps,{ setFilter, setCamera, getVideo })(SearchContainerM);


const styles = {
  serachContainerStyle: {
    display: 'flex', 
    alignItems: 'flex-start', 
    justifyContent: 'space-around', 
    width: '98vw', 
    margin: 'auto', 
    paddingBottom: 10,
    backgroundColor: 'rgba(10,14,25,0.7)'
  },
  buttonGroupButtonStyle: {
    fontSize: 14,
    marginTop: 14,
    borderRadius: 5,
    padding: '.2vw',
    width: '90%', 
    border: 'none',
    boxShadow: '1px 2px 4px 2px rgba(40,120,255,0.6), -1px -2px 4px 2px rgba(40,120,255,0.6)'
  },

}