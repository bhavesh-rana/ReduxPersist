import {View, Text, FlatList, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userData} from '../actions/usergetData';
import {useState} from 'react';
export default function Globalapi({navigation}) {
  const dispatch = useDispatch();
  const [apiData, setapiData] = useState();

  const apiGetdata = useSelector(state => state?.data?.apiuser?.users);

  const onPressapi = async () => {
    const request = {
      onSuccess: res => {
        setapiData(res?.data?.users);
      },
      onFail: err => {
        console.log('res------>', err);
      },
    };
    dispatch(userData(request));
  };

  const renderApidata = ({item, index}) => (
    <View>
      <Text>{item.firstName}</Text>
    </View>
  );

  return (
    <View>
      <Text onPress={onPressapi}>First Api</Text>
      <FlatList data={apiData} renderItem={renderApidata} />
      <TouchableOpacity
        style={{
          backgroundColor: '#8989',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          padding: 10,
        }}
        onPress={() => navigation.navigate('InfoScreen')}>
        <Text> Another Api</Text>
      </TouchableOpacity>
    </View>
  );
}
