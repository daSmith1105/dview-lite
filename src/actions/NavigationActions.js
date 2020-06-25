import { 
    SCREEN_CHANGE,
    JUMP_SYSTEM
  } from './types';
  
export const screenChange = screen => {
  return {
    type: SCREEN_CHANGE,
    payload: screen
  };
};

export const jumpSystem = (system) => {
  console.log(system)
  return {
    type: JUMP_SYSTEM,
    payload: system
  };
};