import { 
  CAM_VIEW_CHANGED,
  SET_AUTO_SCROLL,
  SET_CAM_BROWSER_CAM
} from '../actions/types';

const INITIAL_STATE = { 
  currentCamView: 'cam-1',
  camBrowserCam: '01',
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
        return { 
          ...state, 
          autoScrollEnabled:  action.payload ? true : false
        }
      case SET_CAM_BROWSER_CAM:
        let cam = action.payload.toString();
        if(action.payload < 10){
          cam = '0' + action.payload
        }
        return { 
          ...state, 
          camBrowserCam:  cam
        }
      default:
          return state;
  };
};