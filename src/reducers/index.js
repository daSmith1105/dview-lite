import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ServerReducer from './ServerReducer';
import ConfButtonsReducer from './ConfButtonsReducer';

export default combineReducers({
    auth: AuthReducer,
    server: ServerReducer,
    config: ConfButtonsReducer
});