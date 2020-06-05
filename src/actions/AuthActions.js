import { 
  LOGIN_USER_START,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  AUTO_LOGIN_CHANGED,
  LOGIN_RESULT,
  LOGIN_SUCCESS,
  CLEAR_SESSION_MODAL,
  LOGOUT_USER,
  SET_SESSION_FROM_STORAGE,
  EXPIRE_SESSION,
  SET_AUTOSCAN_TIMEOUT,
  SET_PTZ_CONFIG,
  SET_ALL_CAMERAS,
  SET_PTZ_PRESETS,
  SET_AUTH_SERVERS,
  SET_USER_DATA,
  SET_USER_RIGHTS,
  SET_USER_CAMERAS
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
            const reqBody = {   
                "jsonrpc": 2.0,
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
        const reqBody = {   
            "jsonrpc": 2.0,
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

export const loginUser = ( sName, sPass, fForce, fLocal, sServer, fAuto, bSerial ) => {
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
            if(result[0]){
            // if server is alive attempt login
                const reqBody = {   
                    "jsonrpc": 2.0,
                    "method": "auth.loginUser",
                    "id": 200,
                    "params": [ sName, sPass, fForce ? true : false, fLocal ? true : false ] // [sName, sPass, fForce, fLocal]
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
                    // possible results: noauth, noremote, exists, maxsession, error
                    if(result) {
                        if(result.length > 8) {
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
                            // get all the data we need for user and system
                            getPostLogin(dispatch, result, sServer, sName, sPass, bSerial);
                            dispatch({ type: LOGIN_SUCCESS, payload: result });
                            // push to live page
                            history.push('/live');

                        } else {
                            dispatch({ type: LOGIN_RESULT, payload: result });
                        }
                    } else {
                        dispatch({ type: LOGIN_RESULT, payload: "error" });  
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

const getPostLogin = (dispatch, sSess, sServer, sName, sPass, bSerial ) => {
    // Get/set all config data needed to display live and playback screens (Standard Viewer)
    systemGetAll(dispatch, sSess, sServer);
    ptzGetConfigs(dispatch, sSess, sServer);
    getAllCameras(dispatch, sSess, sServer);
    ptzGetPresets(dispatch, sSess, sServer);
    getAuthServers(dispatch, sSess, sName, sServer);
    getUserByName(dispatch, sSess, sName, sPass, bSerial, sServer); // this function also calls getUSerRights() and getUserCameras()
}

const systemGetAll = (dispatch, sSess, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.system.getAll",
        "id": 200,
        "params": [ sSess ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        dispatch({ type: SET_AUTOSCAN_TIMEOUT, payload: data.bAutoScanTimeout })
    })
    .catch(error => {
        console.error('Error:', error);
        dispatch({ type: SET_AUTOSCAN_TIMEOUT, payload: 10 })
    }); 
}

const ptzGetConfigs = (dispatch, sSess, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.ptz.getAllConfigs",
        "id": 200,
        "params": [ sSess ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        dispatch({ type: SET_PTZ_CONFIG, payload: data })
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

const getAllCameras = (dispatch, sSess, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.camera.getAllCameras",
        "id": 200,
        "params": [ sSess ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        dispatch({ type: SET_ALL_CAMERAS, payload: data })
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

const ptzGetPresets = (dispatch, sSess, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.ptz.getAllPresets",
        "id": 200,
        "params": [ sSess ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        dispatch({ type: SET_PTZ_PRESETS, payload: data })
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

const getAuthServers = (dispatch, sSess, sName, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.server.getAllAuthServers",
        "id": 200,
        "params": [ sSess, sName ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        // organize this data by sName
        let sortedByName = data.sort((a,b) => (a.sName > b.sName) ? 1 : 0); 
        dispatch({ type: SET_AUTH_SERVERS, payload: sortedByName })
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

const getUserByName = (dispatch, sSess, sName, sPass, bSerial, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.user.getUserByName",
        "id": 200,
        "params": [ sSess, sName ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        // after we have the user's id we can call to get user rights
        getUserRights(dispatch, sSess, data.bID, bSerial, sServer); // sSess, bID, bSerial, sServer
        getUserCameras(dispatch, sSess, data.bID, bSerial, sServer)
        dispatch({ 
            type: SET_USER_DATA, 
            bID: data.bID ? data.bID : 0,
            bInactivityTimeout: data.bInactivityTimeout ? data.bInactivityTimeout : 0,
            bType: data.bType ? data.bType : 0,
            sDescription: data.sDescription ? data.sDescription : '',
            sName: data.sName ? data.sName : '',
            sPass: sPass
        })
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

const getUserRights = (dispatch, sSess, bID, bSerial, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.user.getRights",
        "id": 200,
        "params": [ sSess, bID, bSerial ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        dispatch({ type: SET_USER_RIGHTS, payload: data })
       
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}

const getUserCameras = (dispatch, sSess, bID, bSerial, sServer) => {
    const reqBody = {   
        "jsonrpc": 2.0,
        "method": "config.user.getCameras",
        "id": 200,
        "params": [ sSess, bID, bSerial ]
    };
    axios({
        method: 'post',
        url: sServer,
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        data: reqBody,
        timeout: 6000
    })
    .then( (response) => {
        let data = response.data.result[1];
        dispatch({ type: SET_USER_CAMERAS, payload: data })
    
    })
    .catch(error => {
        console.error('Error:', error);
    }); 
}