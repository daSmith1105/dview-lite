import React from 'react';
import { connect } from 'react-redux';
import { resetPlayback } from '../actions';
import HeaderButtonGroup from './HeaderButtonGroup';
import '../App.css';
import SearchContainer from './SearchContainer';
import PlayerWindow from './PlayerWindow';
import ClipContainer from './ClipContainer';

class Playback extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          temp: ''
      };
  };

  componentDidMount = () => {
    this.props.resetPlayback();
  }
    
  render() {
    const { 
      playbackContainerStyle
    } = styles;

    return (
        <div style={ playbackContainerStyle }>
            <HeaderButtonGroup />
            <SearchContainer />
            <PlayerWindow />
            <ClipContainer />
      </div>
    );
  };
};

const mapStateToProps = state => {
    return {
        state
    }
};

export default connect(mapStateToProps, { resetPlayback })(Playback);

const styles = {
  playbackContainerStyle: {
   
    width: '100%',
    height: '100vh',
    // backgroundColor: 'green'
  }
  
};
