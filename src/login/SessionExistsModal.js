import React from 'react';
import Button from '../components/Button';

const SessionExistsModal = props => {

  const { modalContainerStyle } = styles;

  return(
    <div style={ modalContainerStyle }>
      <p style={{ margin: 5, fontSize: 16, color: 'lightgrey', fontWeight: 'bold', }}>Monarch Login</p>
      <p style={{ margin: 5, fontSize: 20, fontWeight: 'bold', color: 'white' }}>You are already logged in.</p>
      <p style={{ margin: 5, fontSize: 14, fontWeight: 'bold', color: 'lightgrey' }}>Would you like to terminate your other session?</p>
      <div style={{ flexDirection: 'row', marginTop: 30, marginBottom: 20 }}>
      <Button onClick={ props.onDeny } 
              buttonText='Cancel'
              background='lightgrey'
              height={24}
              radius />
      <Button onClick={ props.onAccept } 
              buttonText='OK' 
              background='lightgrey'
              height={24}
              radius />
      </div>
    </div>
  );
};

export default SessionExistsModal;

const styles = {
  modalContainerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#135ba2',
    height: '100%',
    width: '100%',
    borderRadius: 5,
    color: 'lightgrey',
    padding: 10
  }
};