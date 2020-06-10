import { 
    GET_SERVER,
    SET_AUTOSCAN_TIMEOUT,
    SET_PTZ_CONFIG,
    SET_PTZ_PRESETS,
    SET_ALL_CAMERAS,
    SET_AUTH_SERVERS
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
    sVersionMajor: '',
    bTimestamp: 0,
    bTimeDiffmax: 36000,
    bAutoScanTimeout: 5,
    ptzConfig: [],
    ptzPresets: [],
    cameras: [],
    authServers: [],
    sServer: 'http://192.168.0.22',
    sServerLiveMPE: '/mpe/'
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
      case GET_SERVER:
        return { 
          ...state, 
          bSerial: action.bSerial,
          sName: action.sName,
          sVersion: action.sVersion,
          sVersionMajor: action.sVersion.split('.')[0],
          bNumCams: action.bNumcams
        }
      case SET_AUTOSCAN_TIMEOUT:
        return { 
          ...state, 
          bAutoScanTimeout: action.payload
        }
      case SET_PTZ_CONFIG:
        return { 
          ...state, 
          ptzConfig: action.payload
        }
      case SET_PTZ_PRESETS:
        return { 
          ...state, 
          ptzPresets: action.payload
        }
      case SET_ALL_CAMERAS:
        return { 
          ...state, 
          cameras: action.payload
        }
      case SET_AUTH_SERVERS:
        return { 
          ...state, 
          authServers: action.payload
        }
      default:
        return state;
    };
  };
