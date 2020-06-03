import { 
    SCREEN_CHANGE
  } from './types';
  
  export const screenChange = screen => {
      return {
        type: SCREEN_CHANGE,
        payload: screen
      };
    };