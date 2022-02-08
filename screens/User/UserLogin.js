import React , {useState}from 'react'
import { View, Text, ImageBackground ,StyleSheet ,Dimensions ,  KeyboardAvoidingView,TouchableWithoutFeedback} from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserLogin = ({navigation}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const login =  ()=>{
        fetch("http://10.0.2.2:3000/signin",{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
           "email":email,
           "password":password
         })
        })
        .then(res=>res.json())
        .then( data=>{
            AsyncStorage.setItem('token',data.token)
            props.navigation.replace("home")   
        }).catch(error => {
            console.log(error)
        })
     }
    return (
        <KeyboardAvoidingView>
            <ImageBackground source={require('../../assets/b2.jpg')} style={styles.img}>
            <View>
                <Text style={{color:'white',textAlign:'center',padding:10,fontSize:20}}>Welcome</Text>
                <Text style={{color:'white',textAlign:'center',padding:10,fontSize:20}}>Login to Continue</Text>
                <View style={{
                    borderBottomColor:'red',
                    borderBottomWidth:4,
                    borderRadius:10,
                    marginLeft:120,
                    marginRight:120,
                    marginTop:4
                }}/>
            </View>
            <View>
                <TextInput label="Email" mode="outlined" style={styles.textInput} />
                <TextInput label="Password" mode="outlined" style={styles.textInput} />
                <Button mode="contained" style={styles.textInput} color="red" onPress={() => login() }> Login </Button>
                <Button mode="contained" style={styles.textInput} color="red"> Forgot Password </Button>

            </View>
            <View style={{paddingTop:20}}>
                <Text style={{fontSize : 20,color:'white',fontWeight:'bold',textAlign:'center'}}>New User?</Text>
                <Button mode="contained" style={styles.textInput} color="grey" onPress={() => navigation.navigate('UserSignup') }>Create an Account</Button>
            </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

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



export default UserLogin