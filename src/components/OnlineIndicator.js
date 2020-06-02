import React from 'react';
import checkIsAlive from '../helper/checkIsAlive';
import red from '../../assets/images/red.png';
import yellow from '../../assets/images/yellow.png';
import green from '../../assets/images/green.png';

const OnlineIndicator = props => {
  const { timestamp, fSick } = props;
  let status;
  
  if ( checkIsAlive( timestamp ) && fSick === 1 ) {
    status = 'BLOCKED';
  } else if( checkIsAlive( timestamp )) {
    status = 'ONLINE';
  } else { 
    status = 'OFFLINE';
  };

  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
      <img src={ status === 'ONLINE' ? green : status === 'BLOCKED' ? yellow : red } 
           alt={ status }
           title={ status }
           height={ 25 } 
           width={ 25 } />
      <span style={{ marginLeft: 10, fontSize: 14 }}>{status}</span>
    </div>
  );
};

export default OnlineIndicator;