import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from './screens/Homepage';
import Admin from './screens/Admin';
import User from './screens/User';

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
        <Stack.Screen name="Home" component={Homepage}  options={{
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          ),
        }}/>
        <Stack.Screen name="Admin" component={Admin} options={defaultNavOptions}/>
        <Stack.Screen name="User" component={User} options={defaultNavOptions}/>
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