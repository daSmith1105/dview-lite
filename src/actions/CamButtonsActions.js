import { 
    CAM_VIEW_CHANGED,
    SET_SINGLE_VIEW,
    SET_AUTO_SCROLL,
    SET_CAM_BROWSER_CAM
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

  export const setAutoScroll = (delay) => {
    console.log(delay)
    return {
      type: SET_AUTO_SCROLL,
      payload: delay
    };
  }
  export const setCameraBrowerCam = cam => {
    return {
      type: SET_CAM_BROWSER_CAM,
      payload: cam
    };
  }
