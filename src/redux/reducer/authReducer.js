import { ABOUT_DATA, API_DATA } from '../../actions/type';
import {BACKCOLOR, USER_DATA} from '../action/type';

const initialState = {
  user: [],
  color: 'pink',
  apiuser:[],
  aboutuser:[]
};

const AuthReducer = (state = initialState, action) => {
  console.log('action iss....', action);
  switch (action.type) {
    case USER_DATA:
      return {...state, user: action.payload};
    case BACKCOLOR:
      return {...state, color: action.payload};
    case API_DATA:
      return{...state,apiuser:action.payload};
      case ABOUT_DATA:
        return{...state,aboutuser:action.payload}
    default:
      return state;
  }
};

export default AuthReducer;
