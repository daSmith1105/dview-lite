import React from 'react';
import PlayerContainer from './PlayerContainer';

const PlayerWindowHeader = props => {
  return (
      <div style={ styles.rowStyle }>
        <input type="checkbox" style={{ marginLeft: '.5vw' }}/><span style={{ fontSize: '1vw', marginLeft: '.5vw', marginBottom: '.2vw' }}>Archive</span>
        <input type="checkbox" style={{ marginLeft: '.5vw' }}/><span style={{ fontSize: '1vw', marginLeft: '.5vw', marginBottom: '.2vw' }}>Export</span>
        <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ () => alert('download clicked')}>
          Download
        </button>
        <input type="checkbox" style={{ marginLeft: '.5vw' }}/><span style={{ fontSize: '1vw', marginLeft: '.5vw', marginBottom: '.2vw' }}>w/Overlay</span>
      </div>
  )
}

export default PlayerWindowHeader;

const styles = {
  rowStyle: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent:'center',
    marginTop: '1vw'
  },
  buttonGroupButtonStyle: {
    fontSize:'1vw',
    margin: '.2vw',
    borderRadius: 5,
    padding: '.3vw',
    paddingRight: '.6vw', 
    paddingLeft : '.6vw',
    border: 'none',
    marginLeft: '1.3vw'
  },
}