import React from 'react';
import Button from '../../components/Button';

const SessionExpiredModalM = props => {

  const { modalContainerStyle } = styles;

  return(
    <div style={ modalContainerStyle }>
      <p style={{ margin: 5, fontSize: 20, fontWeight: 'bold', color: 'white',  }}>Session Expired</p>
      <p style={{ margin: 5, fontSize: 14, color: 'lightgrey', fontWeight: 'bold'  }}>
        Someone has logged in from a different device with your username.
      </p>
      <p style={{ margin: 5, fontSize: 16, color: 'white', fontWeight: 'bold'  }}>
        Your session has been terminated.
      </p>
      <div style={{ flexDirection: 'row', marginTop: 16, marginBottom: 10 }}>
      <Button onClick={ props.onAccept } 
              buttonText='OK' 
              background='lightgrey'
              height={30}
              fontSize ={14}
              radius />
      </div>
    </div>
  );
};

export default SessionExpiredModalM;

const styles = {
  modalContainerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#135ba2',
    height: '90%',
    width: '98%',
    borderRadius: 5,
    color: 'lightgrey',
    marginTop: '5%',
    marginLeft: 5,
    marginBottom: 30
  }
};