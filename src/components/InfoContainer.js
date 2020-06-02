import React from 'react';

const InfoContainer = props => {

  return (
    <div style={{ marginBottom: 20, width: props.width || 380, position: 'relative' }}>
      <div style={{ width: props.width ? props.width - 4 : 380,
                    backgroundColor: '#135ba2',
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                    padding: 3} }>
        <h1 style={{ fontSize: 14, margin: 0 }}>{ props.title }</h1>
      </div>
        { props.children }
    </div>
  );
};

export default InfoContainer;
