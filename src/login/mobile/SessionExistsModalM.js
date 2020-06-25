import React from 'react';
import Button from '../../components/Button';

const SessionExistsModalM = props => {

  const { modalContainerStyle } = styles;

  return(
    <div style={ modalContainerStyle }>
      <p style={{ margin: 5, fontSize: 20, fontWeight: 'bold', color: 'white' }}>You are already logged in.</p>
      <p style={{ margin: 10, fontSize: 14, fontWeight: 'bold', color: 'lightgrey' }}>Would you like to terminate your other session?</p>
      <div style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
      <Button onClick={ props.onDeny } 
              buttonText='Cancel'
              background='lightgrey'
              height={30}
              fontSize={14}
              radius />
      <Button onClick={ props.onAccept } 
              buttonText='OK' 
              background='lightgrey'
              height={30}
              fontSize={14}
              radius />
      </div>
    </div>
  );
};

export default SessionExistsModalM;

const styles = {
  modalContainerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#135ba2',
    height: '80%',
    width: '100%',
    borderRadius: 5,
    color: 'lightgrey',
    padding: 9,
    marginTop: '5%',
    marginBottom: 30
  }
};