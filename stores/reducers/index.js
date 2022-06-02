import { combineReducers } from 'redux';
import authReducer from './authReducer';
import themeReducer from './themeReducer';
import cartReducer from './cartReducer';
const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  cart: cartReducer
});

export default rootReducer;
