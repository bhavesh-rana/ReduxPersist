// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {useSelector} from 'react-redux';

// // create a component
// const InfoScreen = () => {
//   const user = useSelector(state => state?.data);
//   console.log('user', user);
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '70%',
//         }}>
//         <Text>
//           <Text style={{fontWeight: 'bold'}}> Email:</Text>
//           {user?.user?.email}
//         </Text>
//         <Text>
//           <Text style={{fontWeight: 'bold'}}> User Name:</Text>
//           {user?.user?.name}
//         </Text>
//       </View>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// //make this component available to the app
// export default InfoScreen;
//import liraries
// import React, {Component, useContext, useEffect, useState} from 'react';
// import {View, Text, StyleSheet, Image} from 'react-native';
// import {CounterContext} from '../hooks/Usercontext';
// import Chekusecontext from './Chekusecontext';
// import {fetchConfig} from '../servises/Firebase';
// import remoteConfig from '@react-native-firebase/remote-config';

// import messaging from '@react-native-firebase/messaging';
// // create a component
// const InfoScreen = () => {
//   const user = useContext(CounterContext);

//   const [test, settest] = useState();
//   const [show, setShow] = useState();

//   useEffect(() => {
//     // const test = async () => {
//     // await remoteConfig().fetch(300); //(optional). Pass the caching time in seconds. 0 will disable caching. Default is 12 hours
//     // const activated = await remoteConfig().fetchAndActivate();
//     // };

//     const fetchRemoteData = async () => {
//       try {
//         remoteConfig().setDefaults({test: '#000'});
//        remoteConfig().setDefaults({hello: false});// setting default value
//         await remoteConfig().fetch(10); // 10 seconds cache
//         const activated = await remoteConfig().fetchAndActivate(); //can read remote data if true

//         //  if (activated) {
//         const values = await remoteConfig().getValue('test'); //returns all values set in remote

//         const shows= await remoteConfig().getValue('hello')  ;
//         console.log("shows=>>>>>>>",shows?.asBoolean());
//         console.log(values?._value);
//         setShow(shows?.asBoolean());
//         settest(values?._value);
//         // }
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     console.log("show++++++",show);
//     fetchRemoteData();

//     // remoteConfig()
//     // .setDefaults({
//     //   hello: '1',
//     // })
//     // .then(() => remoteConfig().fetchAndActivate())
//     // .then(fetchedRemotely => {
//     //   if (fetchedRemotely) {
//     //     console.log('Configs were retrieved from the backend and activated.=>>',fetchedRemotely);
//     //   } else {
//     //     console.log(
//     //       'No configs were fetched from the backend, and the local configs were already activated',fetchedRemotely
//     //     );
//     //   }})
//   }, []);

//   // const fcmToken =  messaging().getToken();
//   // console.log("fcmToken",fcmToken);

//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '70%',
//         }}>

//           <Image style={{tintColor:test}} source={require('../Image/dolls.png')}/>
//         {test == '' ? <Text>test</Text> : <Text>{test}</Text>}
//        {show==false ? <Text>FALSE value</Text>:<Text>TRUE value</Text>}
//         <Text>
//           <Text style={{fontWeight: 'bold'}}> Email:{user}</Text>
//         </Text>
//       </View>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// //make this component available to the app
// export default InfoScreen;

import {View, Text, FlatList} from 'react-native';
import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {aboutData, userData} from '../actions/usergetData';

export default function InfoScreen() {
  const [apiData, setApiData] = useState();
  const dispatch = useDispatch();
  const onPressApidata = () => {
    const request = {
      onSuccess: res => {
        setApiData(res?.data);
      },
      onFail: err => {
        console.log('res------>', err);
      },
    };
    dispatch(aboutData(request));
  };

  const apiRender = ({item, index}) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <View>
      <Text onPress={onPressApidata}>infoScreen</Text>
      <FlatList data={apiData} renderItem={apiRender} />
    </View>
  );
}

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const onPressApidata = () => {
//   axios({
//     url: url,
//     method: 'get',
//   })
//     .then(res => setApiData(res?.data))
//     .catch(er => console.log(er));
// };
