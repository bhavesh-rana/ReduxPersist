import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from '../hooks/Usercontext'

export default function Chekusecontext() {
    const user=useContext(CounterContext);
  return (
    <View>
      <Text>Chekusecontext:{user}</Text>
    </View>
  )
}