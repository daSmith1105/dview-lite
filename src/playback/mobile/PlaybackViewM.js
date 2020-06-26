import React from 'react';
import { connect } from 'react-redux';
import { resetPlayback, logoutUser } from '../../actions';
import '../../App.css';
import SearchContainerM from './SearchContainerM';
import PlayerWindowM from './PlayerWindowM';
import ClipContainerM from './ClipContainerM';
import history from '../../history';
import { FaChevronLeft, FaSignOutAlt } from 'react-icons/fa';
import dividia_logo from '../../images/dividia_logo.png';

class PlaybackViewM extends React.Component {
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
            <img src={dividia_logo} height={30} width='auto' alt="" style={{ marginBottom: 5 }} />
            <SearchContainerM />
            <div style={{ marginBottom: 6 }}>
              <PlayerWindowM />
            </div>
              <ClipContainerM />
            <div style={{ height: 34, width: '98%', marginLeft:'1%', backgroundColor: 'rgba(0,0,0,.4)', borderRadius: 5, marginTop: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              {/* icons for playback, jump?, take picture, logout */}
              <FaChevronLeft style={{ height: '7vmin', width: '7vmin', color: 'white' }} onClick={ () => history.push('/live') } />
              <FaSignOutAlt style={{ height: '7vmin', width: '7vmin', color: 'white' }} onClick={ () => this.props.logoutUser(this.props.sSess) } />
            </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  const { isLoggedIn, sSess } = state.auth;
    return {
        isLoggedIn,
        sSess
    }
};

export default connect(mapStateToProps, { resetPlayback, logoutUser })(PlaybackViewM);

const styles = {
  playbackContainerStyle: {
    width: '100%',
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: 'rgba(10,14,25,0.7)',
    paddingTop: 5
  }
  
};
