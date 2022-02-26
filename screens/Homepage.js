import React,{useState} from 'react'
import { View,StyleSheet ,ImageBackground,ScrollView,ActivityIndicator} from 'react-native'
import {Button} from 'react-native-paper'
import Api from '../component/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Homepage = ({navigation}) => {
    const [adminToken,setAdminToken] = useState(false)
    const [userloginToken,setUserLoginToken] = useState(false)

    const adminLogin = async () => {
        let keys = []
        try {
            keys = await AsyncStorage.getAllKeys()
        } catch(e) {
        }

        keys.forEach(el => {
            if(el == 'ADMIN_LOGIN_TOKEN'){
                setAdminToken(true)
            }
        })

        if(adminToken == false){
            navigation.navigate('AdminLogin')
        }
        if(adminToken == true){
            navigation.navigate('AdminHome')
        }
    }

    const userLogin = async () => {
        let keys = []
        try {
            keys = await AsyncStorage.getAllKeys()
        } catch(e) {}

        keys.forEach(el => {
            if(el == 'USER_LOGIN_TOKEN'){
                setUserLoginToken(true)
            }
        })

        if(userloginToken == false){
            navigation.navigate('UserLogin')
        }
        if(userloginToken == true){
            navigation.navigate('UserHome')
        }
    }

    return (
        <ScrollView>
            <View>
            <ImageBackground source={require('../assets/b3.jpg')} style={styles.img}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Button style={styles.textInput} mode="contained" color="yellow" onPress={() =>adminLogin()}>Admin</Button>                
                    {/* <Button style={styles.textInput} mode="contained" color="yellow" onPress={() => userLogin()}>User</Button>     */}
                </View>
                <View style={styles.line}/>
                <Api />
            </ImageBackground>
            </View>
        </ScrollView>
    )
}

export default Homepage

const styles = StyleSheet.create({
    img:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    textInput : {
        marginLeft : 18,
        marginRight : 18,
        marginTop : 18
    },
    heading : {
        color:'white',
        fontSize:25,
        textAlign:'center',
        fontStyle:'italic',
        fontWeight:'bold',
        padding: 5,
    },
    line:{
        borderBottomColor:'red',
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:60,
        marginRight:60,
        marginTop:4,
        paddingBottom : 20
    }
})