import { 
    GET_SERVER,
    GET_VERSION,
    GET_IP,
    GET_NETWORK_STATUS
  } from './types';
  
import axios from 'axios';
export const getServer = ( sServer ) => {
    console.log('called')
    return (dispatch) => {
        // make an axios request to json-rpc
        const reqBody = {   
            "jsonrpc": 2.0,
            "method": "config.general.getAll",
            "id": 200
        };
        // being blocked by CORS
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
        .then( response => {
            console.log(response.result[1])
            const data = response.result[1];

            dispatch({
                type: GET_SERVER,
                bSerial: data.bSerial,
                sName: data.sName,
                sVersion: data.sVersion,
                bNumCams: data.bNumCams
            })
        })
        .catch(error => {
            console.error('Error:', error);
        }); 
    };
}; 

export const getVersion = ( session, server ) => {
    return (dispatch) => {
        // make an axios request to json-rpc
        dispatch({ type: GET_VERSION })
    };
};
    
export const getIp = ( session, server ) => {
    return (dispatch) => {
        // make an axios request to json-rpc
        dispatch({ type: GET_IP })
    };
};
  
export const isAlive = ( session, server ) => {
    return (dispatch) => {
        // make an axios request to json-rpc
        dispatch({ type: GET_NETWORK_STATUS })
    };
};