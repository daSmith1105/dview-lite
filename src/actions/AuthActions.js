import { 
  LOGIN_USER_START,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  AUTO_LOGIN_CHANGED,
  LOGIN_RESULT,
  LOGOUT_USER
} from './types';

import axios from 'axios';

export const usernameChanged = text => {
    return {
      type: USERNAME_CHANGED,
      payload: text
    };
  };
  
export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const autoLoginChanged = () => {
    return {
        type: AUTO_LOGIN_CHANGED
    };
};

export const checkAutoLogin = () => {
    return( dispatch) => {
        // check local storage for autologin
        // if we have autologin set check for existing session and boot and then get new session variable
        // dispatch({ type: LOGIN_USER_START });
    }
}

export const loginUser = ( username, password, serverUrl ) => {
    return ( dispatch ) => {
        dispatch({ type: LOGIN_USER_START });
        const reqBody = {   "jsonrpc": 2.0,
                            "method": "auth.loginUser",
                            "id": 200,
                            "params": [ username, password, false, true ]
                        };
        // being blocked by CORS
        axios({
            method: 'post',
            url: serverUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: reqBody,
            timeout: 6000
        })
        .then( response => {
            console.log(response)
            // possible results: noauth, noremote, exists, maxsession
            if(response.result && response.result[1]) {
                return dispatch({ type: LOGIN_RESULT, payload: response.result[1] });
            } else {
                return dispatch({ type: LOGIN_RESULT, payload: "error" });  
            }
        })
        .catch(error => {
            console.error('Error:', error);
        }); 
    }
}

export const logoutUser = ( sSess, serverUrl ) => {
    console.log('called')
    return ( dispatch ) => {
        const reqBody = {   "jsonrpc": 2.0,
                            "method": "auth.logoutUser",
                            "id": 200,
                            "params": [ sSess ]
                        };
        // being blocked by CORS
        axios({
            method: 'post',
            url: serverUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: reqBody,
            timeout: 6000
        })
        .then( response => {
            console.log(response)
        })
        .catch(error => {
            console.error('Error:', error);
        }); 
    }
}