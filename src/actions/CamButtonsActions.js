import { 
    CAM_VIEW_CHANGED
  } from './types';
  
  export const camViewChange = camset => {
      console.log(camset)
      return {
        type: CAM_VIEW_CHANGED,
        payload: camset
      };
    };