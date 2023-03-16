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
import {useQuery} from '@apollo/client';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
  Pressable,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {gql} from '@apollo/client';

export const CONTINENT_QUERY = gql`
  query {
    users {
      data {
        id
        name
        username
      }
    }
  }
`;

// mutation demo($input:CreateUserInput!){
//   createUser(input:$input){
//     id
//     name
//   }
// }
// {
//   "input":{
//    "name":"Bhavesh",
//    "email": "@jjjj",
//    "username": "bhavesh"
//  }
// }

export default function Graphql() {
  const {data, loading} = useQuery(CONTINENT_QUERY); //execute query
  console.log('data', data?.users?.data);
  console.log('CONTINENT_QUERY', CONTINENT_QUERY);
  

  if (loading) {
    return <Text>Fetching data...</Text>; //while loading return this
  }

  return (
    <FlatList
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
            <Text style={{color: '#fff'}}>{item.id}</Text>
            <Text style={{color: '#fff'}}>{item.name}</Text>
          </View>
        );
      }}
      keyExtractor={(item, index) => index}
    />
  );
}
