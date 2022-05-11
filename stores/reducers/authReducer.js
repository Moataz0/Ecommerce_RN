import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_LOGOUT,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILED,
  GET_USERS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  user: {},
  error: null,
  isLoading: false,
  isLogin: false,
  message: '',
  token: null,
  users: [],
};

function authReducer(state = initialState, action) {
  let {type, payload} = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
        message: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isLogin: true,
        error: null,
        message: 'Login Success',
      };
    case LOGIN_FAILED:
      return {...state, isLoading: false, error: payload};

    case SET_LOGOUT:
      return {
        ...state,
        error: '',
        message: 'You have logged out',
        user: {},
        isLogin: false,
      };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: payload.firstName + ' created, please login',
      };
    case CREATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}

export default authReducer;
