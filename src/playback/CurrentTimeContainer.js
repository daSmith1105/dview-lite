import React from 'react';
import { connect } from 'react-redux';

const CurrentTimeContainer = props => {
  return (
    props.inline ? 
      <p style={{ margin: 0, marginTop: 6, fontSize: '1.4vmin', fontWeight: 'bold' }}>Current Time: {props.currentTimeLong}</p> :
      <div>
        <p style={{ margin: 0, marginTop: 6, fontSize: '1.4vmin', fontWeight: 'bold' }}>Current Time</p>
        <p style={{ margin: 0, marginTop: 6, fontSize: '1.4vmin', fontWeight: 'bold' }}>{props.currentTimeLong}</p>
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