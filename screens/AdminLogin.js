import React , {useState} from 'react'
import { View, Text, ImageBackground,Dimensions,StyleSheet, Alert} from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Admin = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        fetch("https://nsgymbackend.herokuapp.com/admin/signin",{
          method:"POST",
          headers: {
            "Content-Type" : "application/json"
         },
         body:JSON.stringify({
           "email":email,
           "password":password
        })
        })
        .then(res => res.json())
        .then(data =>{
            
            if(!data.token) {
                Alert.alert(
                    "Invalid Credentials",
                    "Invaild Input Please try again",
                    [{text: "Okay",style: "cancel",},],
                    {cancelable: true,}
                  );
                return
            }
            setEmail('')
            setPassword('')
            AsyncStorage.setItem('ADMIN_LOGIN_TOKEN',data.token)
            navigation.replace('AdminHome')
        }).catch(error => {
            console.log(error)
        })
    }
    
    return (
        <View>
            <ImageBackground source={require('../assets/b2.jpg') } style={styles.img}>
                <View>
                    {/* <Button mode="contained" color="yellow" onPress={() => {navigation.navigate('AdminSignup')}}> signUp </Button> */}
                    <Text style={{color:'white',textAlign:'center',padding:20,fontSize:20}}>Welcome</Text>
                    <Text style={{color:'white',textAlign:'center',padding:10,fontSize:20}}>Login to Continue</Text>
                    <View style={styles.line}/>
                    <View >
                        <TextInput label="Email" mode="outlined" style={styles.textInput} value={email} onChangeText={(text) => {setEmail(text)}}/>
                        <TextInput label="Password" mode="outlined" secureTextEntry={true} style={styles.textInput}  value={password} onChangeText={(text) => {setPassword(text)}} />
                        <Button style={styles.textInput} mode="contained" color="yellow" onPress={() => login() }>Login</Button>                
                    </View> 
                </View>
            </ImageBackground>
        </View>
    )
}

export default Admin

const styles = StyleSheet.create({
    img:{
        height:windowHeight,
        width:windowWidth
    },
    line:{
        borderBottomColor:'red',
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:60,
        marginRight:60,
        marginTop:4
    },
    textInput : {
        marginLeft : 18,
        marginRight : 18,
        marginTop : 18
    },
})
