// export const apiRequst = ({method, url}) => {
//   const data = {
//     url:url
//   };
//   axios(data).then(res=>console.log(res)).catch(er=> console.log(er));
// };

import axios from 'axios';
import {createNavigationContainerRef} from '@react-navigation/native';
 
 
export const navigationRef = createNavigationContainerRef();

export const makeAPIRequest = ({method, url, data, headers, params}) =>
  new Promise((resolve, reject) => {
    const option = {
      method,
      // baseURL: api.BASE_URL,
      url,
      data,
      headers,
      params,
    };
    axios(option)
      .then(response => {
        console.log('axios response ::: ', response);
        if (response.status === 200 || response.status === 201) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        console.log('axios error ::: ', error);
        // if (error?.response?.status === 401) {
        //   removeAsyncStorage();
        //   resetStack(navigationRef, routeNames.auth);
        // }
        // reject(error);
      });
  });
