import { 
    SET_PLATFORM_TYPE
  } from '../actions/types';
  
  const INITIAL_STATE = { 
    platform: ''
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
      case SET_PLATFORM_TYPE:
        return { 
          ...state, 
          platform: action.payload 
        }
      default:
        return state;
    };
  };