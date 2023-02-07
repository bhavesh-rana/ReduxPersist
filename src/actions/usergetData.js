// import {ABOUT_DATA, API_DATA} from './type';
// import {api, GET} from '../helper/apiconstant';
// import {makeAPIRequest} from '../helper/Globalfunction';

// export const userData = request => async dispatch => {
//   // dispatch({type: USER_DATA, payload: request,url:api.user});
//   return makeAPIRequest({url: api.user, method: GET})
//     .then(res => {
//       dispatch({type: API_DATA, payload: res?.data});
//     })
//     .catch(err => console.log('errr=>>>>', err));
// };

// export const aboutData = request => async dispatch => {
//   return makeAPIRequest({url: api.about, method: GET})
//     .then(res => {
//       dispatch({type: ABOUT_DATA, payload: res?.data});
//     })
//     .catch(err => console.log('errr=>>>>', err));
// };
import {ABOUT_DATA, API_DATA} from './type';
import {api, GET} from '../helper/apiconstant';
import {makeAPIRequest} from '../helper/Globalfunction';
import {useState} from 'react';

export const userData = request => async dispatch => {
  // dispatch({type: USER_DATA, payload: request,url:api.user});

  return makeAPIRequest({url: api.user, method: GET})
    .then(response => {
      if (request?.onSuccess) request.onSuccess(response);
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
    }); 
};
// export const CounterContext=createContext(null);

export const aboutData = request => async dispatch => {
  return makeAPIRequest({url: api.about, method: GET})
  .then(response => {
    if (request?.onSuccess) request.onSuccess(response);
  })
  .catch(error => {
    if (request.onFail) request.onFail(error);
  }); 
};
