import React from 'react'
import { ScrollView, Text,View} from 'react-native'
import {Button} from 'react-native-paper'
import Api from '../component/Api'
import AsyncStorage from '@react-native-async-storage/async-storage';


const UserHome = ({navigation}) => {

    const logout = () => {
        const token = AsyncStorage.getItem('USER_LOGIN_TOKEN')
        if(token == null){
            Alert.alert("Not LoggedIn")  
        }
        AsyncStorage.removeItem('USER_LOGIN_TOKEN')
        navigation.replace('Home')
    }

    return (
        <ScrollView style={{padding:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-around',padding:20}}>
                        
                        <Button mode="contained" onPress={() => logout()}> Logout </Button>
            </View>
            <Text style={{textAlign:"center",fontSize:25}}> Welcome User</Text>
            <Text style={{textAlign:"center",fontSize:25}}> Today is </Text>
            <Api/>
        </ScrollView>
    )
}

export default UserHome
