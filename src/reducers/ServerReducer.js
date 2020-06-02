// import { 
//     LOGIN_USER_START,
//     USERNAME_CHANGED,
//     PASSWORD_CHANGED
//   } from '../actions/types';
  
  const INITIAL_STATE = { 
    dvsName: 'Dividia Office', 
    dvsVersion: '5.1.3',
    serverUrl: 'http:localhost:7000',
    fEview: true
  };
  
  export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
      default:
        return state;
    };
  };