import React from 'react';
import Button from '../components/Button';

const SessionExpiredModal = props => {

  const { modalContainerStyle } = styles;

  return(
    <div style={ modalContainerStyle }>
      <p style={{ margin: 5, marginTop: 20, fontSize: 20, fontWeight: 'bold', color: 'white',  }}>Server Error</p>
      <p style={{ margin: 5, fontSize: 14, color: 'lightgrey', fontWeight: 'bold'  }}>
        An error occurred while attempting to login to the server. Please try again.
      </p>
      <p style={{ margin: 5, fontSize: 16, color: 'white', fontWeight: 'bold'  }}>
        If this problem persists, please contact Dividia at 866-348-4342.
      </p>
      <div style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
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
    height: '98%',
    width: '100%',
    borderRadius: 5,
    color: 'lightgrey',
    marginTop: '5%',
    marginLeft: 14
  }
};