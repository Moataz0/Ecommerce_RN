import {combineReducers} from 'redux';
import authReducer from './authReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default rootReducer;
