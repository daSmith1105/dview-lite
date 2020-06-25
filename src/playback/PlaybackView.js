import React from 'react';
import { connect } from 'react-redux';
import { resetPlayback } from '../actions';
import HeaderButtonGroup from './HeaderButtonGroup';
import '../App.css';
import SearchContainer from './SearchContainer';
import PlayerWindow from './PlayerWindow';
import ClipContainer from './ClipContainer';
import moment from 'moment';

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
    console.log(moment(new Date()).format('LLLL'))
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
  const { isLoggedIn } = state.auth;
    return {
        isLoggedIn
    }
};

export default connect(mapStateToProps, { resetPlayback })(Playback);

const styles = {
  playbackContainerStyle: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(10,14,25,0.7)'
  }
  
};
