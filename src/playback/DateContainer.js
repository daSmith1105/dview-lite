import React from 'react';
import { connect } from 'react-redux';
import { setDate } from '../actions';
import moment from 'moment';
import '../App.css'

class DateContainer extends React.Component {

  handleDateSelect = (e) => {
    this.props.setDate(e.target.value);
  }

  render() {
    return (
      <div>
        <p style={ styles.labelTextStyle }>Date</p>
        <input type="date" value={moment(this.props.playbackDate).format('YYYY-MM-DD') }  onChange={this.handleDateSelect} max={ moment(new Date()).format('YYYY-MM-DD') } style={{ paddingLeft: '.5vmin', paddingRight: '.5vmin', borderRadius: 5, fontFamily: 'sans-serif', fontSize: '1.5vmin', height: '1.3vw' }} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { playbackDate } = state.playback;
  return {
    playbackDate
  }
}

export default connect(mapStateToProps, { setDate })(DateContainer);

const styles = {
  labelTextStyle: {
    fontSize: '1.5vmin',
    margin: '.2vw',
    color: 'white'
  }
}