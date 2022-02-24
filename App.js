import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Spinner from 'react-native-loading-spinner-overlay';

import Homepage from './screens/Homepage';
import AdminLogin from './screens/AdminLogin';
import UserSignup  from './screens/UserSignup';
import UserLogin from './screens/UserLogin';
import UserHome from './screens/UserHome';

import AdminHome from './screens/AdminHome';
import AddData from './component/AddData';

const defaultNavOptions = {
  headerStyle: {backgroundColor: '#f4511e'},
  headerTintColor: '#fff',
  headerTitleStyle: {fontWeight: 'bold'}
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage}  options={defaultNavOptions}/>
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={defaultNavOptions}/>
        <Stack.Screen name="AdminHome" component={AdminHome} options={defaultNavOptions}/>
        <Stack.Screen name="UserLogin" component={UserLogin} options={defaultNavOptions}/>
        <Stack.Screen name="UserSignup" component={UserSignup} options={defaultNavOptions}/>
        <Stack.Screen name="UserHome" component={UserHome} options={defaultNavOptions}/>
        <Stack.Screen name="AddData" component={AddData} options={defaultNavOptions}/>
      </Stack.Navigator> 
      
    </NavigationContainer>
  );
}

