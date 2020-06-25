import { 
    SCREEN_CHANGE,
    JUMP_SYSTEM
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    screen: 'login',
    previousSystem: {},
    nextSystem: {}
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
      case SCREEN_CHANGE:
        return { 
          ...state, 
          screen: action.payload 
        }
      case JUMP_SYSTEM:
        return { 
          ...state,
          nextSystem: action.payload
        }
      default:
        return state;
    };
  };