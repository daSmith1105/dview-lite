import React from 'react';
import { connect } from 'react-redux';
import HeaderButtonGroup from './HeaderButtonGroup';
import '../App.css';
import SearchContainer from './SearchContainer';
import PlayerContainer from './PlayerContainer';
import ClipContainer from './ClipContainer';

class Playback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: ''
        };
    };
    
  render() {
    const { 
      playbackContainerStyle
    } = styles;

    return (
        <div style={ playbackContainerStyle }>
            <HeaderButtonGroup />
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start'}}>

              <div style={{ height: '65vw', width: '40vw' }}>
                <SearchContainer />
                <div style={{ height: '2vw'}}></div>
                <ClipContainer />
              </div>

              <div style={{ height: '43vw', width: '55vw' }}>
                <PlayerContainer />
              </div>
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
  playbackContainerStyle: {
    width: '100%',
    height: '100vh',
    // backgroundColor: 'green',
    margin: 'auto'
  }
  
};
