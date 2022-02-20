import React , {useState}from 'react'
import { View, Text, ImageBackground ,StyleSheet ,Dimensions ,  KeyboardAvoidingView,TouchableWithoutFeedback, Alert} from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserLogin = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = () => {
        fetch("https://nsgymbackend.herokuapp.com/signin",{
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
            AsyncStorage.setItem('USER_LOGIN_TOKEN',data.token)
            navigation.replace('UserHome')
            
        }).catch(error => {
            console.log(error)
        })
     }

    return (
        <KeyboardAvoidingView>
            <ImageBackground source={require('../assets/b2.jpg')} style={styles.img}>
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
                <TextInput label="Email" mode="outlined" style={styles.textInput} value={email} onChangeText={(text) => {setEmail(text)}}/>
                <TextInput label="Password" mode="outlined" secureTextEntry={true} style={styles.textInput} value={password} onChangeText={(text) => {setPassword(text)}}/>
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