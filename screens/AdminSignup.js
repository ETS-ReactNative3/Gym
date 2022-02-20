import React, { useState } from 'react'
import { View, Text , ImageBackground,Dimensions,StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput , Button} from 'react-native-paper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AdminSignup = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [isAdmin,setIsAdmin] = useState(false)

    const signUp = () => {
        fetch("https://nsgymbackend.herokuapp.com/admin/signup",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "name" : name,
                "email" : email,
                "password" : password
            })
        }).
        then(res => res.json()).
        then(data => {
            setIsAdmin(true)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <View>
            <ImageBackground source={require('../assets/b2.jpg') } style={styles.img}>
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
                       
                        <Button mode="contained" style={styles.textInput} color="orange" onPress={() => signUp()}> Create Account </Button>
                    </View> 
                </View>
            </ImageBackground>
        </View>
    )
}

export default AdminSignup

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