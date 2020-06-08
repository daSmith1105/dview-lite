import { 
    CAM_VIEW_CHANGED,
    SET_SINGLE_VIEW,
    SET_AUTO_SCROLL
  } from './types';
  
export const camViewChange = camset => {
    return {
      type: CAM_VIEW_CHANGED,
      payload: camset
    };
  };

  export const setSingleView = (cam) => {
    console.log(cam)
    return {
      type: SET_SINGLE_VIEW,
      payload: cam
    };
  }

  export const setAutoScroll = (conf, delay) => {
    return {
      type: SET_AUTO_SCROLL,
      conf,
      delay
    };
  }
