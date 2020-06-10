import React from 'react';
import DatePicker from "react-datepicker";
import { connect } from 'react-redux';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'

class DateContainer extends React.Component {
 
  state = {
    date: new Date(),
    time: new Date(),
  };

 
  handleDateChange = date => {
    this.setState({
      date: date
    });
  };

  handleTimeChange = time => {
    console.log(time)
    // need to transform this to get the actual time since it includes the date as well - moment(time).format('hh:mm a')
    this.setState({
      time: time
    });
  };

  render() {

    return (
      
      <div style={ styles.dateTimeContainerStyle }>
        <div style={ styles.dateTimeSubcontainerStyle }>
          <p style={ styles.labelTextStyle }>Date</p>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
            dateFormat="Pp"
            title="date picker"
            ariaLabelledBy="date picker"
            dateFormat={'MM/dd/yyyy'}
            todayButton="today"
            maxDate={ new Date() }
          />      
        </div>
        <div style={ styles.dateTimeSubcontainerStyle }>
          <p style={ styles.labelTextStyle }>Time</p>
          <DatePicker
            selected={this.state.time}
            onChange={this.handleTimeChange}
            showTimeSelect
            dateFormat="Pp"
            timeIntervals={5}
            title="time picker"
            ariaLabelledBy="time picker"
            dateFormat={'hh:mm a'}
            showTimeSelectOnly
            todayButton="now"
          />      
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentTimeLong } = state.utility;
  return {
    currentTimeLong
  }
}

export default connect(mapStateToProps, {})(DateContainer);

const styles = {
  dateTimeContainerStyle: {
    width: '20vw'
  },
  dateTimeSubcontainerStyle: {
    margin: 'auto', 
    width: '50%'
  },
  labelTextStyle: {
    margin: 0, 
    textAlign: 'left',
    fontSize: '1vw',
    marginBottom: '.2vw',
    marginTop: '.5vw'
  }
}