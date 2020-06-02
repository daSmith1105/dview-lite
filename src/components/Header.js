import React from 'react';
import dividia_logo from '../../assets/images/dividia_logo.jpg';

const Header = props => {

  const { headerContainerStyle, titleStyle, copyrightStyle } = styles;
  const currentYear = new Date().getFullYear();

  return (
    <div style={ headerContainerStyle }>
      <img src={ dividia_logo } height={ 40 } width='auto' alt='logo' />
      <div>
        <p style={ titleStyle }>Dividia Control Center (Monarch)</p>
        <p style={ copyrightStyle }>Copyright &copy; { currentYear } Dividia Technologies, LLC</p>
      </div>
    </div>
  );
};

export default Header;

const styles = {
  headerContainerStyle: {
    display: 'flex',
    height: 55,
    paddingRight: 20,
    paddingLeft: 20, 
    paddingBottom: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid grey'
  },
  titleStyle: {
    margin: 0,
    fontSize: 14
  },
  copyrightStyle: {
    margin: 0,
    fontSize: 10
  }
};