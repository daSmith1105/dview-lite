import React from 'react';
import Button from '../components/Button';

const SessionExpiredModal = props => {

  const { modalContainerStyle } = styles;

  return(
    <div style={ modalContainerStyle }>
      <p style={{ margin: 5, fontSize: 16, color: 'lightgrey', fontWeight: 'bold', }}>Monarch Login</p>
      <p style={{ margin: 5, fontSize: 20, fontWeight: 'bold', color: 'white',  }}>Session Expired</p>
      <p style={{ margin: 5, fontSize: 14, color: 'lightgrey', fontWeight: 'bold',  }}>This session is no longer valid.</p>
      <p style={{ margin: 5, fontSize: 13, color: 'white', fontWeight: 'bold',  }}>Click OK to continue</p>
      <div style={{ flexDirection: 'row', marginTop: 30, marginBottom: 20 }}>
      <Button onClick={ props.onAccept } 
              buttonText='OK' 
              background='lightgrey'
              height={24}
              radius />
      </div>
    </div>
  );
};

export default SessionExpiredModal;

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