import { 
  LOGIN_USER_START,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  AUTO_LOGIN_CHANGED,
  LOGIN_RESULT,
  CLEAR_SESSION_MODAL,
  LOGOUT_USER
} from './types';

import axios from 'axios';
import history from '../history';

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

export const clearSessionModal = () => {
    return {
        type: CLEAR_SESSION_MODAL
    }
}

export const checkAutoLogin = () => {
    return( dispatch) => {
        // check local storage for autologin
        // if we have autologin set check for existing session and boot and then get new session variable
        // dispatch({ type: LOGIN_USER_START });
    }
}

const isAlive = async(serverUrl) => {
    return new Promise( async(resolve,reject) => {
        const reqBody = {   "jsonrpc": 2.0,
                            "method": "info.isAlive",
                            "id": 200
                        };
        await axios({
            method: 'post',
            url: serverUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: reqBody,
            timeout: 2000
        })
        .then( response => {
            const data = response.data.result[1]
            if(data === false) {
                console.log('returned: nvr is not accessible')
                resolve(false);
            }
            console.log('returned: nvr is accessible')
            resolve(true);
        })
        .catch( () => {
            console.log('returned: nvr is not accessible - timeout')
            resolve(false);
        }); 
    })
};

export const loginUser = ( username, password, serverUrl, force ) => {
    return async ( dispatch ) => {
        dispatch({ type: LOGIN_USER_START });
        if(username.trim().length < 1 || password.trim().length < 1) {
            dispatch({ type: LOGIN_RESULT, payload: 'loginerror' });
            return setTimeout(() => dispatch({ type: LOGIN_RESULT, payload: '' }), 4000);
        };
        //check server is alive first using method: info.isAlive
        const online = isAlive(serverUrl)
        Promise.all([online])
        .then( async(result) => {
            console.log('boom!')
            if(result[0]){
            // if server is alive attempt login
                const reqBody = {   "jsonrpc": 2.0,
                    "method": "auth.loginUser",
                    "id": 200,
                    "params": [ username, password, force ? true : false, force ? false : true ]
                };
                await axios({
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
                    const result = response.data.result[1];
                    // possible results: noauth, noremote, exists, maxsession, error
                    if(result) {
                        if(result.length > 8) {
                        // we recieved a session key - push to live page
                            history.push('/live')
                        }
                        return dispatch({ type: LOGIN_RESULT, payload: result });
                    } else {
                        return dispatch({ type: LOGIN_RESULT, payload: "error" });  
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    return dispatch({ type: LOGIN_RESULT, payload: "error" }); 
                })
            } else {
            // if server is not alive show error to user
                console.log('Error: Server Offline or Unavailable')
                return dispatch({ type: LOGIN_RESULT, payload: "error" }); 
            }
        })
        .catch( error => {
        // display error to user
            console.error('Error:', error);
        })
    }
}

export const logoutUser = ( sSess, serverUrl ) => {
    return ( dispatch ) => {
        dispatch({ type: LOGOUT_USER });
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
            console.log(response.data.result);
            history.push('/');
        })
        .catch(error => {
            console.error('Error:', error);
            history.push('/');
        }); 
    }
}