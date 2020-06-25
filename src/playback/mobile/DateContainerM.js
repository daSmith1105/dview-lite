import React from 'react';
import { connect } from 'react-redux';
import { setDate } from '../../actions';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import '../../App.css';

class DateContainerM extends React.Component {

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
      <div style={{ width: '100%' }}>
          <DatePicker
            selected={this.state.date}
            onChange={date => this.handleDateSelect(date)}
            showTimeInput
            timeInputLabel="Time:"
            timeFormat="HH:mm"
            timeIntervals={5}
            showPopperArrow={false}
            shouldCloseOnSelect={false}
            disabledKeyboardNavigation
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "36px, 1px"
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: "viewport"
              }
            }}
            dateFormat="MM/d/yyyy h:mm aa"
            maxDate={new Date()}
            timeClassName="time-input-lite"
            className="datetime-input-lite">
            
             <div className="hoverable" style={{ color: 'dodgerblue', fontSize: 14, marginBottom: '.2vmin' }} onClick={() => alert('this needs to be implemented') }>Today</div>
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

export default connect(mapStateToProps, { setDate })(DateContainerM);

const styles = {
  labelTextStyle: {
    fontSize: '1.5vmin',
    margin: '.2vw',
    color: 'white'
  }
}