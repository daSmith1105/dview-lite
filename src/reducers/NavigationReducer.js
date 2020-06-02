import { 
    SCREEN_CHANGE
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    screen: 'login'
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
      case SCREEN_CHANGE:
        return { 
          ...state, 
          screen: action.payload 
        }
      default:
        return state;
    };
  };