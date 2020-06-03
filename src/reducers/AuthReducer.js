import { 
  LOGIN_USER_START,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_RESULT,
  CLEAR_SESSION_EXISTS_MODAL,
  CLEAR_EXPIRED_SESSION_MODAL
} from '../actions/types';

const INITIAL_STATE = { 
  username: '', 
  password: '',
  loading: false,
  autoLoginStatus: true,
  loginResult: '',
  sSess: '',
  isLoggedIn: false
};

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case USERNAME_CHANGED:
      return { 
        ...state, 
        username: action.payload 
      }
    case PASSWORD_CHANGED:
      return { 
        ...state, 
        password: action.payload 
      }
    case LOGIN_USER_START:
      return { 
        ...state, 
        loading: true
      }
    case LOGIN_RESULT:
      console.log(action.payload)

      return { 
        ...state, 
        loginResult: action.payload,
        loading: false,
        sSess: action.payload.length > 8 ? action.payload : '',
        isLoggedIn: action.payload.length > 8 ? true : false
      }
    case CLEAR_SESSION_EXISTS_MODAL:
      return { 
        ...state, 
        loginResult: '',
        username: '', 
        password: '',
      }
    case CLEAR_EXPIRED_SESSION_MODAL:
      return { 
        ...state, 
        loginResult: '',
        username: '', 
        password: '',
      }
    default:
      return state;
  };
};