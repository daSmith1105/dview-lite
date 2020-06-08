import { 
  CAM_VIEW_CHANGED,
  SET_AUTO_SCROLL
} from '../actions/types';

const INITIAL_STATE = { 
  currentCamView: 'cam-1',
  autoScrollEnabled: false
};

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
      case CAM_VIEW_CHANGED:
        return { 
            ...state, 
            currentCamView: action.payload 
        }
      case SET_AUTO_SCROLL:
        let conf = action.conf;
        let delay = action.delay;
        return { 
          ...state, 
          autoScrollEnabled:  delay !== '' ? true : false
        }
      default:
          return state;
  };
};