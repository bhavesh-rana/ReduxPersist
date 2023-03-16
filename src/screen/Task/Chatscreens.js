import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import icons from '../../helper/icons';

const Chatscreens = () => {
  return (
    <View style={styles.container}>
        <View style={{height:64,backgroundColor:'#085B53',flexDirection:'row'}}>
         <Image source={icons.ArrowBack} />
         <View style={{height:32,width:240,backgroundColor:'red'}}>
         <Image style={{backgroundColor:'#fff',height:32,width:32,borderRadius:50}} />
        
         </View>
        </View>
      <View style={{flexDirection:'row' ,justifyContent:'space-around',alignItems:'center'}}>
        <View style={styles.textInputcontainer}> 
        <Image source={icons.smileFace} />
        <TextInput style={styles.textInput} placeholder='Type a message'  />
        <Image source={icons.atachFile} />
        <Image source={icons.camera} />
        </View>
        <View style={{ }}>
            <Image source={icons.macroPhone} />
        </View>
      </View>
    </View>
  );
};

export default Chatscreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent:'space-between'
  },
  textInputcontainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '80%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:5,
    justifyContent:'space-around'
  //  marginHorizontal:5
  },
  textInput:{
    
    width:'70%'
  }
});
