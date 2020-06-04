import { 
  LOGIN_USER_START,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  AUTO_LOGIN_CHANGED,
  LOGIN_RESULT,
  CLEAR_SESSION_MODAL,
  LOGOUT_USER,
  SET_SESSION_FROM_STORAGE,
  EXPIRE_SESSION
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

export const autoLoginChanged = (status) => {
    return {
        type: AUTO_LOGIN_CHANGED,
        payload: status ? true : null
    };
};

export const clearSessionModal = () => {
    return {
        type: CLEAR_SESSION_MODAL
    }
}

export const checkExists = (sSess, serverUrl) => {
    return async ( dispatch ) => {
        return new Promise( async(resolve, reject) => {
            let session = sSess;
            if(!sSess) {
                session = await localStorage.getItem('sSess');
                dispatch({ type: SET_SESSION_FROM_STORAGE, payload: session }); 
            }
            const reqBody = {   "jsonrpc": 2.0,
                                "method": "auth.checkExists",
                                "id": 200,
                                "params": [session]
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
                    return resolve(false);
                }
                resolve(true);
            })
            .catch( () => {
                console.log('check session exists returned: false - timeout')
                resolve(false);
            }); 
        })
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

export const loginUser = ( sName, sPass, fForce, fLocal, sServer, fAuto ) => {
    return async ( dispatch ) => {
        dispatch({ type: LOGIN_USER_START });
        if(sName.trim().length < 1 || sPass.trim().length < 1) {
            dispatch({ type: LOGIN_RESULT, payload: 'loginerror' });
            return setTimeout(() => dispatch({ type: LOGIN_RESULT, payload: '' }), 4000);
        };
        //check server is alive first using method: info.isAlive
        const online = isAlive(sServer)
        Promise.all([online])
        .then( async(result) => {
            console.log('boom!')
            if(result[0]){
            // if server is alive attempt login
                const reqBody = {   "jsonrpc": 2.0,
                    "method": "auth.loginUser",
                    "id": 200,
                    "params": [ sName, sPass, fForce ? true : false, fLocal ? true : false ] // sName, sPass,fForce, fLocal
                };
                await axios({
                    method: 'post',
                    url: sServer,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    data: reqBody,
                    timeout: 6000
                })
                .then( response => {
                    const result = response.data.result[1];
                    console.log(result)
                    // possible results: noauth, noremote, exists, maxsession, error
                    if(result) {
                        if(result.length > 8) {
                            console.log('whamo')
                            // set session key in local storage in case we refresh the page
                            localStorage.setItem('sSess', result);
                            if(fAuto) {
                                localStorage.setItem('autoLogin', 'true');
                                localStorage.setItem('username', sName);
                                localStorage.setItem('password', sPass);
                            } else {
                                localStorage.removeItem('autoLogin', 'true');
                                localStorage.removeItem('username', sName);
                                localStorage.removeItem('password', sPass);
                            }
                        // we recieved a session key - push to live page
                            history.push('/live');
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

export const expireSession = ( sSess, serverUrl, autoLogin ) => {
    return ( dispatch ) => {
        localStorage.removeItem('sSess');
        dispatch({ type: EXPIRE_SESSION, payload: autoLogin ? autoLogin : null });
        const reqBody = {   
            "jsonrpc": 2.0,
            "method": "auth.logoutUser",
            "id": 200,
            "params": [ sSess ]
        };
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
        .then( () => {
            history.push('/');
        })
        .catch(error => {
            console.error('Error:', error);
            history.push('/');
        }); 
    }
}

export const logoutUser = ( sSess, serverUrl) => {
    return ( dispatch ) => {
        localStorage.removeItem('sSess');
        dispatch({ type: LOGOUT_USER });

        const reqBody = {   "jsonrpc": 2.0,
                            "method": "auth.logoutUser",
                            "id": 200,
                            "params": [ sSess ]
                        };
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
        .then( () => {
            history.push('/');
        })
        .catch(error => {
            console.error('Error:', error);
            history.push('/');
        }); 
    }
}