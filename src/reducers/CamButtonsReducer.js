import { 
  CAM_VIEW_CHANGED,
  SET_CAM_BROWSER_CAM
} from '../actions/types';

const INITIAL_STATE = { 
  currentCamView: 'cam_1',
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