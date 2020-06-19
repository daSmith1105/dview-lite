// AuthActions
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const USERNAME_CHANGED = 'USERNAME_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const AUTO_LOGIN_CHANGED = 'AUTO_LOGIN_CHANGED';
export const LOGIN_RESULT = 'LOGIN_RESULT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CLEAR_SESSION_MODAL = 'CLEAR_SESSION_MODAL';
export const SET_SESSION_FROM_STORAGE = 'SET_SESSION_FROM_STORAGE';
export const EXPIRE_SESSION = 'EXPIRE_SESSION';
export const SET_AUTOSCAN_TIMEOUT = 'SET_AUTOSCAN_TIMEOUT';
export const SET_PTZ_CONFIG = 'SET_PTZ_CONFIG';
export const SET_ALL_CAMERAS = 'SET_ALL_CAMERAS';
export const SET_PTZ_PRESETS = 'SET_PTZ_PRESETS';
export const SET_AUTH_SERVERS = 'SET_AUTH_SERVERS';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_USER_RIGHTS = 'SET_USER_RIGHTS';
export const SET_USER_CAMERAS = 'SET_USER_CAMERAS';

// NavigationActions
export const SCREEN_CHANGE = 'SCREEN_CHANGE';
export const JUMP_SYSTEM = 'JUMP_SYSTEM';

// ServerActions
export const GET_SERVER = 'GET_SERVER';
export const GET_VERSION = 'GET_VERSION';
export const GET_IP = 'GET_IP';
export const GET_NETWORK_STATUS = 'GET_NETWORK_STATUS';

// ConfButtonsActions
export const CONFIG_CHANGED = 'CONFIG_CHANGED';

// CamButtonsActions
export const CAM_VIEW_CHANGED = 'CAM_VIEW_CHANGED';
export const SET_SINGLE_VIEW = 'SET_SINGLE_VIEW';
export const SET_CAM_BROWSER_CAM = 'SET_CAM_BROWSER_CAM';

//UtilityActions
export const SET_PLATFORM_TYPE = 'SET_PLATFORM_TYPE';
export const UPDATE_CURRENT_TIME = 'UPDATE_CURRENT_TIME';

// PlaybackActions
export const RESET_PLAYBACK = 'RESET_PLAYBACK';
export const SET_CAMERA = 'SET_CAMERA';
export const SET_DATE = 'SET_DATE';
export const SET_TIME = 'SET_TIME';
export const SET_VIDEO = 'GET_VIDEO';
export const SET_FILTER = 'SET_FILTER';
export const SET_SPEED = 'SET_SPEED';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const STOP = 'STOP';
export const FAST_FORWARD = 'FAST_FORWARD';
export const STEP_FORWARD = 'STEP_FORWARD';
export const FAST_REVERSE = 'FAST_REVERSE';
export const STEP_REVERSE = 'STEP_REVERSE';
export const UPDATE_PROGRESS_BAR = 'UPDATE_PROGRESS_BAR';
export const TOGGLE_FULLSCREEN_PLAYBACK = 'TOGGLE_FULLSCREEN_PLAYBACK';
export const INCREMENT_CLIPS = 'INCREMENT_CLIPS';
export const DECREMENT_CLIPS = 'DECREMENT_CLIPS';
export const SET_CURRENT_CLIP_PLAYING = 'SET_CURRENT_CLIP_PLAYING';