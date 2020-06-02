import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

const HotNote = props => {

  const { noteContainerStyle } = styles;

  return (
    <div style={ noteContainerStyle }>
       <FaTimesCircle className="info"
                      style={{ color: 'white', height: 20, width: 'auto',position: 'absolute', top: 5, right: 5 }}
                      onClick={ props.onClose } />
        <h1 style={{ color: 'white', fontSize: 18, margin: 0, marginBottom: 10, width: '85%', marginRight: 'auto', marginLeft: 'auto' }}>{ props.noteCompany } : <span style={{ fontSize: 16 }}>{ props.noteProject }</span></h1>

      <div style={{ backgroundColor: 'white', width: '95%', marginRight: 'auto', marginLeft: 'auto', borderRadius: 10, padding: 6, position: 'relative' }}>
        <FaEdit className="info"
                style={{ height: 22, width: 'auto',position: 'absolute', top: 5, right: 5 }}
                onClick={ props.onEdit } />
        <p style={{ textAlign: 'left', margin: 0, fontSize: 14, fontWeight: 'bold', textDecoration: 'underline' }}>Hot Note:</p>
        <p style={{ textAlign: 'left', color: 'grey', fontSize: 12, fontWeight: 'bold', margin: 0, marginTop: 10 }}>{ props.noteText }</p>
      </div>
    </div>
  );
};

export default HotNote;

const styles = {
  noteContainerStyle: {
    height: 'auto',
    width: 340,
    borderRadius: 10,
    backgroundColor: 'grey',
    position: 'absolute',
    top: 300,
    right: 0,
    left: 0,
    margin: 'auto',
    zIndex: 40,
    padding: 10
  }
};