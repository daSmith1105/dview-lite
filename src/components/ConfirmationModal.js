import React from 'react';
import Button from './Button';
import Loader from '../../assets/images/loader.gif';

const ConfirmationModal = props => {

  const { modalContainerStyle } = styles;
  console.log(props)
  return (
    <div style={ modalContainerStyle }>

      <div style={{ marginBottom: 10}}>
        { props.loading && <p style={{ color: 'white', fontSize: 20, padding: 0, margin: 0 }}>Saving Serial #{ props.bSerial }</p> }
        { props.saveSuccess && <p style={{ color: 'white', fontSize: 20,  padding: 0, margin: 0  }}>Saved.</p> }
        { props.saveFail && <p style={{ color: 'white', fontSize: 20,  padding: 0, margin: 0  }}>Failed to Save.</p> }
        { props.message && <p style={{ color: 'white', fontSize: 16,  padding: 0, margin: 0, marginTop: 10  }}>{props.message}</p> }
      </div>

      <p style={{ color: 'white', fontSize: 18,  padding: 0, margin: 0  }}>{ props.sName.trim().length > 0 ? props.sName.trim() : props.sNameOriginal }</p>

      { props.loading && <img src={Loader} width={180} height='auto' alt='loader' style={{ marginTop: -45 }} /> }
   
      { props.saveSuccess || props.saveFail ?
        <div style={{ marginTop: 30 }}>
          <Button onClick={ props.closeConfirmationModal } 
                  buttonText="OK" 
                  background="lightgrey" 
                  radius />
        </div> :
        null
      }
    </div>
  );
};

export default ConfirmationModal;

const styles = {
  modalContainerStyle: {
    height: 180,
    width: 300,
    backgroundColor: 'grey',
    marginRight: '25%',
    borderRadius: 5,
    paddingTop: 20
  }
};