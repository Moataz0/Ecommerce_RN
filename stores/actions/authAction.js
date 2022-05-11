import axios from 'axios';
import {SIGNIN, SIGNUP} from '../../services/urls';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOGOUT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  GET_USERS_SUCCESS,
  CREATE_USER_REQUEST,
} from './actionTypes';

export const login = values => async dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    await axios.post(SIGNIN, values).then(res => {
      let {name} = res.data;
      dispatch(getUsersSuccess(res.data));
      dispatch(loginSuccess(name));
      console.log('thedata....', res.data, ' + name is ', name);
    });
  } catch (error) {
    let stus = error.response.status;
    if (stus === 400 || stus === 404) {
      console.log('res status', stus);
      dispatch(loginFailed('Invalid email or password'));
    }
  }
};

const getUsersSuccess = data => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginFailed = errorMessage => ({
  type: LOGIN_FAILED,
  payload: errorMessage,
});

export const logout = dispatch => {
  dispatch({
    type: SET_LOGOUT,
  });
};

export const registerUser = (values, navigation) => async dispatch => {
  dispatch({
    type: CREATE_USER_REQUEST,
  });
  try {
    await axios.post(SIGNUP, values).then(res => {
      dispatch({type: CREATE_USER_SUCCESS, payload: res.data});
      navigation.navigate('SignIn');
    });
  } catch (error) {
    console.log('Error when register', error);
    Toast;
    dispatch({type: CREATE_USER_FAILED, payload: error});
  }
};
