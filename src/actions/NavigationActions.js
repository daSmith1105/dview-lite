import { 
    SCREEN_CHANGE
  } from './types';
  
  export const screenChange = screen => {
      alert(screen)
      return {
        type: SCREEN_CHANGE,
        payload: screen
      };
    };