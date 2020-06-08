import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ServerReducer from './ServerReducer';
import ConfButtonsReducer from './ConfButtonsReducer';
import UserReducer from './UserReducer';
import UtilityReducer from './UtilityReducer';
import CamButtonsReducer from './CamButtonsReducer';

export default combineReducers({
    auth: AuthReducer,
    server: ServerReducer,
    config: ConfButtonsReducer,
    camera: CamButtonsReducer,
    user: UserReducer,
    utility: UtilityReducer
});