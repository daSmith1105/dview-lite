import { 
    SET_PLATFORM_TYPE,
    UPDATE_CURRENT_TIME
  } from '../actions/types';

  import moment from 'moment';
  
  const INITIAL_STATE = { 
    platform: '',
    currentTimeLong: moment(new Date()).format('hh:mm:ss a'),
    currentTimeShort: moment(new Date()).format('hh:mm a'),
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
      case SET_PLATFORM_TYPE:
        return { 
          ...state, 
          platform: action.payload 
        }
      case UPDATE_CURRENT_TIME:
        return { 
          ...state, 
          currentTimeLong: moment(new Date()).format('hh:mm:ss a'),
          currentTimeShort: moment(new Date()).format('hh:mm a')
        }
      default:
        return state;
    };
  };