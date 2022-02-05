import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'


import Homepage from './screens/Homepage';
import Admin from './screens/Admin/Admin';
import UserSignup  from './screens/User/UserSignup';
import UserLogin from './screens/User/UserLogin';
import UserHome from './screens/User/UserHome';

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
        <Stack.Screen name="Admin" component={Admin} options={defaultNavOptions}/>
        <Stack.Screen name="UserLogin" component={UserLogin} options={defaultNavOptions}/>
        <Stack.Screen name="UserSignup" component={UserSignup} options={defaultNavOptions}/>
        <Stack.Screen name="UserHome" component={UserHome} options={defaultNavOptions}/>
      </Stack.Navigator> 
      
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  button : {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  }
})