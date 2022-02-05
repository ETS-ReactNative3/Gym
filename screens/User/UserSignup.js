import React, { useState } from 'react'
import { View, Text , ImageBackground,Dimensions,StyleSheet } from 'react-native'
import { AsyncStorage } from 'react-native';
import {TextInput , Button} from 'react-native-paper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserSignup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const sendCred = () => {
        fetch("http://10.0.2.2:7777/signup",{
            method:"POST",
            headers:  {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "Name" : name,
                "email" : email,
                "password" : password
            })
        }).then(res => res.json()).then(data => {
            try {
                AsyncStorage.setItem('token',data.token)
            }catch(error) {
                console.log(error)
            }
        }).catch(err => {
            console.log(error)
        })
    }

    return (
        <View>
            <ImageBackground source={require('../../assets/b2.jpg') } style={styles.img}>
                <View  style={{paddingTop : 35}}>
                    <Text style={{color:'white',textAlign:'center',padding:10,fontSize:20}}>Welcome</Text>
                    <Text style={{color:'white',textAlign:'center',padding:10,fontSize:20}}>Create an Account</Text>
                    <View style={{
                        borderBottomColor:'red',
                        borderBottomWidth:4,
                        borderRadius:10,
                        marginLeft:120,
                        marginRight:120,
                        marginTop:4
                    }}/>
                    <View style={{padding:20}}>
                        <TextInput label="Name" mode="outlined" style={styles.textInput} value={name} onChangeText={(text) => {setName(text)}}/>
                        <TextInput label="Email" mode="outlined" style={styles.textInput} value={email} onChangeText={(text) => {setEmail(text)}}/>
                        <TextInput label="Password" mode="outlined" secureTextEntry={true} style={styles.textInput} value={password} onChangeText={(text) => {setPassword(text)}}/>
                        <Button mode="contained" style={styles.textInput} color="orange" onPress={() => sendCred()}> Create Account </Button>

                    </View> 
                </View>
            </ImageBackground>
        </View>
    )
}

export default UserSignup

const styles = StyleSheet.create({
    img:{
        height:windowHeight,
        width:windowWidth
    },
    textInput : {
        marginLeft : 18,
        marginRight : 18,
        marginTop : 18
    }
})