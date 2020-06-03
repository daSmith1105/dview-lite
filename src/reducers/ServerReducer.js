import { 
    GET_SERVER
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    bSerial: 0,
    bNumCams: 0,
    sIP: '',
    bPort: 0,
    sLocalIP: '',
    fLocal: false,
    sName: '',
    sVersion: '',
    bTimestamp: 0,
    bTimeDiffmax: 36000
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
      case GET_SERVER:
        return { 
          ...state, 
          bSerial: action.bSerial,
          sName: action.sName,
          sVersion: action.sVersion,
          bNumCams: action.bNumcams
        }
      default:
        return state;
    };
  };
