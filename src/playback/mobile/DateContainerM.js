import React from 'react';
import { connect } from 'react-redux';
import { setDate } from '../../actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../App.css';

class DateContainerM extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
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

    const CustomInput = ({ value, onClick }) => (
      <button className="example-custom-input" style={{ backgroundColor: "lightgrey", fontSize: 13, padding: 2, paddingRight: 8, paddingLeft: 8, borderRadius: 5 }} onClick={onClick}>
        {value}
      </button>
    );

    return (
      <div style={{ width: '100%' }}>
          <DatePicker
            customInput={<CustomInput />}
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
