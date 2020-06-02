import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';

const NavBar = props => {

  const { navBarContainerStyle } = styles;
  
  return (
    <div style={ navBarContainerStyle }>
      <Link to="/jetengine">
        <Button buttonText="JET ENGINE"
                onClick={ props.onJetEngineClick }
                borderColor='#135ba2'
                background={ props.activePage === 'jetengine' ? '#135ba2' : 'transparent' }
                textColor={ props.activePage === 'jetengine' ? 'white' : '#135ba2' }
                radius />
      </Link>
      <Link to="/jobsite">
        <Button buttonText="JOB SITE"
                onClick={ props.onJobsiteClick }
                borderColor='#135ba2'
                background={ props.activePage === 'jobsite' ? '#135ba2' : 'transparent' }
                textColor={ props.activePage === 'jobsite' ? 'white' : '#135ba2' }
                radius />
      </Link>
      <Link to="/nvr">
        <Button buttonText="NVR"
                onClick={ props.onRegistrationClick }
                borderColor='#135ba2'
                background={ props.activePage === 'nvr' ? '#135ba2' : 'transparent' }
                textColor={ props.activePage === 'nvr' ? 'white' : '#135ba2' }
                radius />
      </Link>
      {/* <Link to="/reports">
        <Button buttonText="REPORTS" 
                borderColor='dodgerblue'
                textColor='#135ba2'
                radius />
      </Link> */}
      <Link to="/">
        <Button buttonText="LOGOUT" 
                onClick={ props.onLogoutClick }
                borderColor='#135ba2'
                textColor='#135ba2'
                radius />
      </Link>
    </div>
  );
};

export default NavBar;

const styles = {
  navBarContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    width: '90%',
    maxWidth: 1100,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    zIndex: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom:10
  }
};