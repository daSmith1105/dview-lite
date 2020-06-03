import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

class Playback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: ''
        };
    };
    
  render() {
    const { 
      liveContainerStyle
    } = styles;

    return (
        <div style={ liveContainerStyle }>
           <h1 style={{ color: 'black' }}>Playback View</h1>
           <div style={{ marginTop: 60}}>
            <Link to="/live">Go to Live View</Link>
           </div>
           <div style={{ marginTop: 40}}>
            <Link to="/">Go to Logout</Link>
           </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
    return {
        state
    }
};

export default connect(mapStateToProps, {})(Playback);

const styles = {
  liveContainerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightgrey',
    position: 'relative',
    // backgroundColor: 'green'
  }
  
};
