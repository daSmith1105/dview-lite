import { 
    CONFIG_CHANGED,
    CAM_VIEW_CHANGED
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    conf: 'conf-1',
    currentCamView: 'cam-1'
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case CONFIG_CHANGED:
            return { 
            ...state, 
            conf: action.payload 
            }
        case CAM_VIEW_CHANGED:
            return { 
                ...state, 
                currentCamView: action.payload 
            }
        default:
            return state;
    };
  };