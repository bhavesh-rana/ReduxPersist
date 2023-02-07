//import liraries
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import HomeScreen from '../screen/homeScreen';
import InfoScreen from '../screen/infoScreen';
import Globalapi from '../screen/Globalapi';
const Stack = createNativeStackNavigator();

// create a component
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Globalapi' component={Globalapi}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default MainNavigation;
