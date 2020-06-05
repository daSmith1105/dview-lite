import { 
    SET_USER_DATA,
    SET_USER_RIGHTS,
    SET_USER_CAMERAS
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    bID: 0,
    sName: '',
    sDescription: '',
    sPassword: '',
    bType: 0,
    bInactivityTimeout: 0,
    userRights: [],
    userCameras: []
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case SET_USER_DATA:
            return { 
                ...state, 
                bID: action.payload,
                sName: action.sName,
                sDescription: action.sDescription,
                sPassword: action.sPassword,
                bType: action.bType,
                bInactivityTimeout: action.bInactivityTimeout
            }
        case SET_USER_RIGHTS:
            return { 
                ...state, 
                userRights: action.payload
            }
        case SET_USER_CAMERAS:
            return { 
                ...state, 
                userCameras: action.payload
            }
        default:
            return state;
    };
  };