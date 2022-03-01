import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from './screens/Homepage';
import AdminLogin from './screens/AdminLogin';
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
        <Stack.Screen name="Home" component={Homepage}  options={{
          headerTitle:'Home',
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
      
        }}/>
        
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{
          headerTitle:'Login',
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="AdminHome" component={AdminHome} options={defaultNavOptions}/>
        <Stack.Screen name="AddData" component={AddData} options={defaultNavOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

