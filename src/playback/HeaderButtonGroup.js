import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions';
import CurrentTimeContainer from './CurrentTimeContainer';
import '../App.css';

const HeaderButtonGroup = props => {
  return (
    <div style= {{ width: '100%', paddingTop: '3vw', marginBottom: '.5vw' }}>
      <div style={{ float: 'left', marginLeft: '10vw', marginTop: '.2vw' }}>
        <CurrentTimeContainer />
      </div>
      <div style={{ float: 'right', marginRight: '10vw'}}>
        <button className="hoverableButton" style={ styles.buttonGroupButtonStyle }>
          <Link style={{ color: 'black', textDecoration : 'none' }} to="/live" >Live</Link>
        </button>
        <button className="hoverableButton" style={ styles.buttonGroupButtonStyleSelected }>
          Playback
        </button>
        <button className="hoverableButton" style={ styles.buttonGroupButtonStyle } onClick={ () => props.logoutUser(props.sSess, '/JSON/')}> {/* sServer + */}
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
  headerButtonGroupContainerStyle: {
    fontSize: '1vw'
  },
  buttonGroupButtonStyle: {
    fontSize: 12,
    margin: 5,
    borderRadius: 5,
    padding: 3,
    paddingRight: 5, 
    paddingLeft : 5,
    border: 'none'
  },
  buttonGroupButtonStyleSelected: {
    fontSize: 12,
    margin: 8,
    borderRadius: 5,
    padding: 3,
    paddingRight: 8, 
    paddingLeft : 8,
    backgroundColor: 'dodgerblue',
    border: 'none',
    color: 'white'
  }
}