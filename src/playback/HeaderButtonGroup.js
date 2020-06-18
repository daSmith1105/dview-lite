import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions';
import CurrentTimeContainer from './CurrentTimeContainer';
import '../App.css';

const HeaderButtonGroup = props => {
  return (
    <div style= {{ width: '90vw', margin: 'auto' }}>
      <div style={{ float: 'left' }}>
        <CurrentTimeContainer inline />
      </div>
      <div style={{ float: 'right' }}>
        <button style={ styles.headerButtonStyle }
                        className="hoverableButton">
          <Link style={{ color: 'black', textDecoration : 'none' }} to="/live" >Live</Link>
        </button>
        <button style={ styles.headerButtonStyleSelected }
                        className="hoverableButton">
          Playback
        </button>
        <button style={ styles.headerButtonStyle }
                        className="hoverableButton"
                        onClick={ () => props.logoutUser(props.sSess, '/JSON/')}> {/* sServer + */}
          Logout
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { sSess } = state.auth;
  return {
    sSess
  }
}

export default connect(mapStateToProps, { logoutUser })(HeaderButtonGroup);

const styles = {
  headerButtonStyle: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 10,
    border: 'none',
    borderRadius: 5,
    fontSize: '1.5vmin',
  },
  headerButtonStyleSelected: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 10,
    border: 'none',
    borderRadius: 5,
    fontSize: '1.5vmin',
    backgroundColor: 'dodgerblue',
    color: 'white'
  }
}