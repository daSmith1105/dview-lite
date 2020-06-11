import React from 'react';
import { connect } from 'react-redux';

const CurrentTimeContainer = props => {
  return (
    <p style={{ margin: 0, marginTop: 6, fontSize: '1.4vmin', fontWeight: 'bold' }}>Current Time: {props.currentTimeLong}</p>
  )
}

const mapStateToProps = state => {
  const { currentTimeLong } = state.utility;
  return {
    currentTimeLong
  }
}

export default connect(mapStateToProps, {})(CurrentTimeContainer);