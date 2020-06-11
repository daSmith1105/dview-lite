import { 
  CONFIG_CHANGED,
  SET_SINGLE_VIEW,
} from '../actions/types';

const INITIAL_STATE = { 
  singleCamView: false,
  singleCamSelected: '',
  autoScrollEnabled: false,
  bConf: 0,
  fSingle: false,
  fFullscreen: false,
};

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case SET_SINGLE_VIEW:
      console.log(action.payload)
      let cam = action.payload;
        return { 
          ...state, 
          fSingle:  cam !== '' ? cam : false,
          singleCamSelected: cam 
        }
      case CONFIG_CHANGED:
        if(action.payload === 'conf-fs'){
          return { 
            ...state, 
            fFullscreen: state.fFullscreen ? false : true
          }
        }
        return { 
          ...state
        }
      default:
          return state;
  };
};