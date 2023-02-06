import {combineReducers} from 'redux';
import AuthReducer from './authReducer';

const appReducer = combineReducers({
  data: AuthReducer,
});

export default appReducer;
