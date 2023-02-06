// //import liraries
// import React, {Component, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {addUser, backColor} from '../redux/action/action';

// // create a component
// const HomeScreen = ({navigation}) => {
//   const [name, setUserName] = useState();
//   const [email, setEmail] = useState();
//   const user = useSelector(state =>  state?.data);

//   const dispatch = useDispatch();

//   const usersData = {
//     name: name,
//     email: email,
//   };

//   const onSubmitbButton = () => {
//     console.log('usersData', usersData);
//     dispatch(addUser(usersData));
//     navigation.navigate('InfoScreen');
//   };

//  const onChageColor=()=>{
//   dispatch(backColor('red'))
//  }

//   return (
//     <View style={[styles.container,{backgroundColor:user?.color}]}>
//       <TextInput
//         style={{
//           height: 35,
//           width: '80%',
//           backgroundColor: 'rgba(0,0,0,0.1)',
//           borderRadius: 6,
//           padding: 10,
//           fontSize: 15,
//           marginVertical: 5,
//         }}
//         placeholder="Email"
//         onChangeText={text => setUserName(text)}
//       />
//       <TextInput
//         style={{
//           height: 35,
//           width: '80%',
//           backgroundColor: 'rgba(0,0,0,0.1)',
//           borderRadius: 6,
//           padding: 10,
//           fontSize: 15,
//           marginVertical: 5,
//         }}
//         placeholder="User Name"
//         onChangeText={text => setEmail(text)}
//       />
//       <TouchableOpacity
//         onPress={onSubmitbButton}
//         style={{
//           height: 50,
//           width: '50%',
//           backgroundColor: 'pink',
//           marginVertical: 25,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 50,
//         }}>
//         <Text>Submit</Text>
//       </TouchableOpacity>
//       {/* <Text>{userName}</Text>
//       <Text>{email}</Text> */}
//       <TouchableOpacity
//       onPress={onChageColor}
//         style={{
//           height: 50,
//           width: '50%',
//           backgroundColor: 'blue',
//           marginVertical: 25,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 50,
//         }}>
//         <Text>Color red</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     },
// });

// //make this component available to the app
// export default HomeScreen;

// //Context use
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import { CounterContext } from '../hooks/Usercontext';
// import InfoScreen from './infoScreen';

// export default function HomeScreen({navigation}) {
//   const [name, setUserName] = useState('');
//   const [email, setEmail] = useState();

//   const onSubmitbButton = () => {
//     navigation.navigate('InfoScreen');
//   };

//   return (
//     <View
//       style={{
//         backgroundColor: '#fff',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <TextInput
//         style={{
//           height: 35,
//           width: '80%',
//           backgroundColor: 'rgba(0,0,0,0.1)',
//           borderRadius: 6,
//           padding: 10,
//           fontSize: 15,
//           marginVertical: 5,
//         }}
//         placeholder="Email"
//         onChangeText={text => setUserName(text)}
//       />
//       <TextInput
//         style={{
//           height: 35,
//           width: '80%',
//           backgroundColor: 'rgba(0,0,0,0.1)',
//           borderRadius: 6,
//           padding: 10,
//           fontSize: 15,
//           marginVertical: 5,
//         }}
//         placeholder="User Name"
//         onChangeText={text => setEmail(text)}
//       />
//       <TouchableOpacity
//         onPress={onSubmitbButton}
//         style={{
//           height: 50,
//           width: '50%',
//           backgroundColor: 'pink',
//           marginVertical: 25,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 50,
//         }}>
//         <Text>Submit</Text>
//       </TouchableOpacity>
//       <CounterContext.Provider value={name}>
//         <InfoScreen/>
//       </CounterContext.Provider>
//       {/* <Text>{userName}</Text>
//           <Text>{email}</Text> */}
//     </View>
//   );
// }
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
 


export default function HomeScreen({navigation}) {
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState();

  const onSubmitbButton = () => {
    navigation.navigate('InfoScreen');
  };

 
  return (
    <View
      style={{
     
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <TextInput
        style={{
          height: 35,
          width: '80%',
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: 6,
          padding: 10,
          fontSize: 15,
          marginVertical: 5,
        }}
        placeholder="Email"
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        style={{
          height: 35,
          width: '80%',
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: 6,
          padding: 10,
          fontSize: 15,
          marginVertical: 5,
        }}
        placeholder="User Name"
        onChangeText={text => setEmail(text)}
      />
      <TouchableOpacity
        onPress={onSubmitbButton}
        style={{
          height: 50,
          width: '50%',
          backgroundColor: 'pink',
          marginVertical: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
