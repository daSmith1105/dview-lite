import React from 'react';
import { connect } from 'react-redux';

const CurrentTimeContainer = props => {
  return (
    props.inline ? 
      <p style={{ color: 'white', margin: 0, padding: 0, marginTop: '2vmin', fontSize: '1.7vmin', fontWeight: 'bold' }}>Current Time: {props.currentTimeLong}</p> :
      <div style={{ marginBottom: 5 }}>
        <p style={{ color: 'white', margin: 0, padding: 0, fontSize: '1.4vmin', fontWeight: 'bold' }}>Current Time</p>
        <p style={{ color: 'white', margin: 0, padding: 0, fontSize: '1.4vmin', fontWeight: 'bold' }}>{props.currentTimeLong}</p>
      </div>
  )
}

const mapStateToProps = state => {
  const { currentTimeLong } = state.utility;
  return {
    currentTimeLong
  }
}

export default connect(mapStateToProps, {})(CurrentTimeContainer);