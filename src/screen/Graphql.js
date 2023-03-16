import {useMutation, useQuery} from '@apollo/client';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {
  CONTINENT_QUERY,
  DELETE_DATA,
  FILTER_DATA,
  GET_PHOTOS,
  GET_USERSDATA,
} from '../helper/GraphQuery';
export default function Graphql() {
  const [start, setstart] = useState(0);
  const [end, setEnd] = useState(10);
  // const {data, loading} = useQuery(GET_USERSDATA); //Get user data

  console.log('data', data);

  // const {data,loading}=useQuery(GET_PHOTOS)
  const {data, loading} = useQuery(FILTER_DATA, {
    variables: {
      options: {
        slice: {
          start: +start,
          end: +end,
        },
      },
    },
  }); //Get filter user data
  const [updateUser] = useMutation(CONTINENT_QUERY); //Update user
  // const [deleteUser, {loading: loadings, error: errored}] =
  //   useMutation(DELETE_DATA);  //delete user
  if (loading) {
    return <Text>Fetching data...</Text>; //while loading return this
  }
  // if (loadings) {
  //   return <Text>Fetching data...</Text>;
  // }

  const onUpdate = () => {
    updateUser({
      variables: {
        updateUserId: 5,
        input: {
          name: 'Bhavesh',
          username: 'rana ',
          email: '@hhhh',
        },
      },
    });
  };

  const onDelete = () => {
    deleteUser({
      variables: {
        deleteUserId: 5,
      },
    });
  };

  console.log(typeof +start);
  console.log(start);
  return (
    <View>
      <Text>Filters</Text>
      <TextInput
        placeholder="Start"
        value={start}
        onChangeText={val => setstart(val)}
      />
      <TextInput
        placeholder="End"
        value={end}
        onChangeText={val => setEnd(val)}
      />
      <FlatList
        // data={data.photos?.data}

        data={data?.users?.data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#049',
                margin: 5,
                padding: 5,
              }}>
              <Image
                style={{height: 50, width: 50}}
                source={{uri: item?.url}}
              />
              <TouchableOpacity onPress={onUpdate}>
                <Text style={{color: '#0f0'}}>update user</Text>
              </TouchableOpacity>
              <Text style={{color: '#fff'}}>{item.id}</Text>
              <Text style={{color: '#fff'}}>{item.name}</Text>
              <TouchableOpacity onPress={onDelete}>
                <Text style={{color: 'red'}}>delete User</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
// import React, { Component, useEffect, useState } from 'react';
// import { useQuery } from "@apollo/client";

// // Task
// // Filters code, curency, continent

// // const COUNTRY_QUERY = gql`
// //   query curency{
// //     country{
// //       name

// //     }
// //   }
// // `
// import { gql } from "@apollo/client";

// export const CONTINENT_QUERY = gql`
//   query ContinentQuery {
//     continents {
//       code
//       name
//     }
//   }
// `;

// export default function Graphql({navigation}) {
//   const { data, loading } = useQuery(CONTINENT_QUERY);
//   // const{data, loading} = useQuery(COUNTRY_QUERY)

//   useEffect(()=>{
//    // console.log('GraphQL ===', data)
//   })

//   return (
//     <View style={{flex:1 }}>
//       <Text style={{fontSize:38, justifyContent:'center'}}> GraphQL ss</Text>
//       {/* <FlatList
//       //  data={data?.countries}
//         renderItem={ ({item}) =>
//           <View style={{backgroundColor:'green', marginBottom:10, height:40}}>
//             <Text style={{color:'white'}}>{item.name}</Text>
//             <Text>lww</Text>
//             <Text style={{fontSize:38, justifyContent:'center'}}> GraphQL ss</Text>
//           </View>
//         }
//       /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });
