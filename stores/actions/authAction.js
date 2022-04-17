import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {SIGNIN} from '../../services/urls';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_AUTH_TOKEN,
  GET_AUTH_TOKEN,
} from './actionTypes';

export const login = values => async dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    await axios.post(SIGNIN, values).then(res => {
      dispatch(loginSuccess(res.data));
      console.log('thedata....', res.data);
      dispatch(setAuthToken(res.data.token));
      // AsyncStorage.setItem('auth', res.data.token);
    });
  } catch (error) {
    if (error.response.status === 400) {
      console.log('res status', error.response.status);
      dispatch(loginFailed('Invalid email or password'));
    }
    // dispatch(loginFailed(error));
    console.log(error);
  }
};

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...data,
  },
});

const loginFailed = errorMessage => ({
  type: LOGIN_FAILED,
  payload: errorMessage,
});
export const setAuthToken = token => ({
  type: SET_AUTH_TOKEN,
  token,
});

export const getAuthToken = token => ({
  type: GET_AUTH_TOKEN,
  token,
});
