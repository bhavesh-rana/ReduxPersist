import {BACKCOLOR, USER_DATA} from '../action/type';

const initialState = {
  user: [],
  color: 'pink',
};

const AuthReducer = (state = initialState, action) => {
  console.log('action iss....', action);
  switch (action.type) {
    case USER_DATA:
      return {...state, user: action.payload};
    case BACKCOLOR:
      return {...state, color: action.payload};

    default:
      return state;
  }
};

export default AuthReducer;
