import React from 'react';
import Button from '../components/Button';

const MaxSessionsModal = props => {

  const { modalContainerStyle } = styles;

  return(
    <div style={ modalContainerStyle }>
      <p style={{ margin: 5, marginTop: 10, fontSize: 20, fontWeight: 'bold', color: 'white',  }}>Session Error</p>
      <p style={{ margin: 5, fontSize: 14, color: 'lightgrey', fontWeight: 'bold'  }}>
        Maximum login sessions exceeded.
      </p>
      <p style={{ margin: 5, fontSize: 16, color: 'white', fontWeight: 'bold'  }}>
        Try again later.
      </p>
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

export default MaxSessionsModal;

const styles = {
  modalContainerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#135ba2',
    height: '95%',
    width: '100%',
    borderRadius: 5,
    color: 'lightgrey',
    marginTop: '5%',
    marginLeft:10
  }
};