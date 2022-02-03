import React from 'react';
import {StyleSheet, View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeNavigator, createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home';
import Account from './pages/Account';
import AutrePage from './pages/AutrePage';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="AutrePage" component={AutrePage}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
