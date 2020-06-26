import React from 'react';
import { connect } from 'react-redux';
import { setDate } from '../actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';

class DateContainer extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount = () => {
    this.props.setDate(new Date());
    this.setState({ date: new Date()})
  }

  handleDateSelect = (date) => {
    this.props.setDate(date);
    this.setState({date});
  }

  resetToToday = () => {
   // blah
  }
  
  render() {
    return (
      <div>
        <p style={ styles.labelTextStyle }>Date / Time</p>
          <DatePicker
            selected={this.state.date}
            onChange={date => this.handleDateSelect(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={5}
            timeCaption="time"
            dateFormat="MM/d/yyyy h:mm aa"
            maxDate={new Date()}
            className="datetime-input">
             <div className="hoverable" style={{ color: 'dodgerblue', fontSize: '1.2vmin', marginBottom: '.2vmin' }} onClick={() => alert('this needs to be implemented') }>Today</div>
             </DatePicker>
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