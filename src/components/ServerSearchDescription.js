import React from 'react';

const ServerSearchDescription = props => {

  const { descriptionContainerStyle } = styles;

  return (
    <div style={ descriptionContainerStyle }>
      <p onClick={ props.onClick } style={{ position: 'absolute', top: -10, right: 10, fontSize: 16, fontWeight: 'bold' }}>X</p>
      <p style={{ fontWeight: 'bold', fontSize: 16, textDecoration: 'underline' }}>Supported searches:</p>
      <p><span style={{ fontWeight: 'bold' }}>DVS Serial: </span> [386]</p>
      <p><span style={{ fontWeight: 'bold' }}>Company Name: </span> [Dividia]</p>
      <p><span style={{ fontWeight: 'bold' }}>Server Name: </span> [Dividia]</p>
      <p><span style={{ fontWeight: 'bold' }}>Tag Name: </span> [lpr]</p>
      <p><span style={{ fontWeight: 'bold' }}>Project Key Seed: </span> [552853041]</p>
      <p><span style={{ fontWeight: 'bold' }}>Features: </span> [pos, eview, etc.]</p>
      <p><span style={{ fontWeight: 'bold' }}>POS Types: </span> [apex, positouch, etc.]</p>
      <p><span style={{ fontWeight: 'bold' }}>DVS Key: </span> [xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx]</p>
    </div>
  )
};

export default ServerSearchDescription

const styles = {
  descriptionContainerStyle: {
    height: 'auto',
    width: 310,
    backgroundColor: 'rgba(255,255,255,.9)',
    borderRadius: 10, 
    border: '2px solid grey',
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left',
    positiion: 'relative'
  },
  p: {
    margin: 0
  }
};