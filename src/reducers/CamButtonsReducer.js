import { 
  CAM_VIEW_CHANGED,
  SET_SINGLE_VIEW
} from '../actions/types';

const INITIAL_STATE = { 
  currentCamView: 'cam-1',
  singleCamView: false,
  singleCamSelected: ''
};

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
      case SET_SINGLE_VIEW:
        let cam = action.payload;
          return { 
            ...state, 
            singleCamView:  cam !== '' ? cam : false,
            singleCamSelected: cam 
          }
      case CAM_VIEW_CHANGED:
          return { 
              ...state, 
              currentCamView: action.payload 
          }
      default:
          return state;
  };
};