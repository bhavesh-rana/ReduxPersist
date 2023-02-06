import {BACKCOLOR, USER_DATA} from './type';

export const addUser = request => async dispatch => {
  dispatch({type: USER_DATA, payload: request});
};

export const backColor=request => async dispatch =>{
  dispatch({ type:BACKCOLOR,payload:request})
}