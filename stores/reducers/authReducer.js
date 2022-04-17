import {
  GET_AUTH_TOKEN,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_AUTH_TOKEN,
} from '../actions/actionTypes';

const initialState = {
  user: {},
  error: '',
  isLoading: false,
  isLogin: false,
  message: '',
  token: null,
};

function authReducer(state = initialState, action) {
  const {type, payload} = action;
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
        message: 'Login Success',
        error: '',
      };
    case LOGIN_FAILED:
      return {...state, isLoading: false, error: payload};
    case SET_AUTH_TOKEN:
      return {...state, token: action.token};

    case GET_AUTH_TOKEN:
      return {...state, token: action.token};
    default:
      return state;
  }
}

export default authReducer;
