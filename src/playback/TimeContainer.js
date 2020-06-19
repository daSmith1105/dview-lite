import React from 'react';
import { connect } from 'react-redux';
import { setTime } from '../actions';
import '../App.css'

class TimeContainer extends React.Component {

  handleTimeSelect = (e) => {
    this.props.setTime(e.target.value)
  }

  render() {
    return (
      <div>
        <p style={ styles.labelTextStyle }>Time</p>
        <input type="time" default={this.props.playbackTime} value={this.props.playbackTime }  onChange={this.handleTimeSelect} style={{ paddingLeft: '.5vmin', paddingRight: '.5vmin', borderRadius: 5, fontFamily: 'sans-serif', fontSize: '1.5vmin', height: '1.3vw' }} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { playbackTime } = state.playback;
  return {
    playbackTime
  }
}

export default connect(mapStateToProps, { setTime })(TimeContainer);

const styles = {
  labelTextStyle: {
    fontSize: '1.5vmin',
    margin: '.2vw',
    color: 'white'
  }
}