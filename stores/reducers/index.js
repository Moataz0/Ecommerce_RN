import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  login: loginReducer,
});

export default rootReducer;
