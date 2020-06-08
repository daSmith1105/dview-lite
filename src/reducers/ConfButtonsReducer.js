import { 
    CONFIG_CHANGED,
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    conf: 'conf-1',
    currentCamView: 'cam-1',
    fullScreenEnabled: false
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case CONFIG_CHANGED:
          if(action.payload === 'conf-fs') {
            return { 
              ...state, 
              fullScreenEnabled: !state.fullScreenEnabled
            }
          }
            return { 
              ...state, 
              conf: action.payload 
            }
        default:
            return state;
    };
  };