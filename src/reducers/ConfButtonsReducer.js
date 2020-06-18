import { 
    CONFIG_CHANGED,
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    conf: 'conf-1'
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case CONFIG_CHANGED:
          if(action.payload !== 'conf-fs') {
            return { 
              ...state, 
              conf: action.payload 
            }
          }
          return { 
            ...state
          }
        default:
            return state;
    };
  };