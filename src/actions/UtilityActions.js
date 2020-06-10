import { 
    SET_PLATFORM_TYPE,
    UPDATE_CURRENT_TIME
  } from './types';
  
  export const getPlatform = () => {
    return (dispatch) => {
        let platform = navigator.platform;
        let type = '';
        if(platform.indexOf('Win') > -1) {
            type = 'Win'
        } else if(platform.indexOf('Mac') > -1) {
            type = 'Mac'
        } else if(platform.indexOf('iPad') > -1) {
            type = 'Ios'
        } else if(platform.indexOf('iPhone') > -1) {
            type = 'Ios'
        } else if(platform.indexOf('Android') > -1) {
            type = 'Android'
        };

        dispatch({ type: SET_PLATFORM_TYPE, payload: type });
    };
};  

export const updateCurrentTime = () => {
    return {
        type: UPDATE_CURRENT_TIME
    }
}