import React from 'react';
import { connect } from 'react-redux';
import TimePicker from 'react-time-picker';
import { setTime } from '../actions';
import { FaClock } from 'react-icons/fa';
import '../App.css'

class TimeContainer extends React.Component {

  state = {
    time: new Date()
  }

  handleTimeSelect = (time) => {
   console.log(time)
    this.props.setTime(time)
    this.setState({ time })
  }

  render() {
    return (
      <div>
        <p style={ styles.labelTextStyle }>Time</p>
        <div style={{ backgroundColor: 'white', borderRadius: 5 }}>
          <TimePicker value={this.state.time}
                      onChange={time => this.handleTimeSelect(time)}
                      calendarIcon={ <FaClock style={{ color: 'grey' }} /> }
                      clearIcon={null}
                      format={'hh:mm a'} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { playbackTime, playbackDate } = state.playback;
  return {
    playbackTime,
    playbackDate
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