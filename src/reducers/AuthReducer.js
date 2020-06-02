import { 
  LOGIN_USER_START,
  USERNAME_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = { 
  username: '', 
  password: '',
  autoLoginStatus: true
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
        loading: true, error: '' 
      }
    default:
      return state;
  };
};