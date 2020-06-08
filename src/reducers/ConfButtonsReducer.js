import { 
    CONFIG_CHANGED,
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    conf: 'conf-1'
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case CONFIG_CHANGED:
          console.log('got - ', action.payload)
          if(action.payload !== 'conf-fs') {
            return { 
              ...state, 
              conf: action.payload 
            }
          }
        default:
            return state;
    };
  };