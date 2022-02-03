import React from 'react'
import { View, Text , TextInput, Button, ImageBackground,Dimensions,StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Admin = () => {
    return (
        <View>
            <ImageBackground source={require('../assets/b2.jpg') } style={styles.img}>
                <View  style={{paddingTop : 35}}>

                    <View style={{padding:20}}>
                        <Text style={{padding:10,fontSize:15,color:'white'}}>Email : <TextInput /> </Text>
                        <Text style={{padding:10,fontSize:15,color:'white'}}>Password : <TextInput /> </Text>
                        <View style={{flexDirection:'row',padding:20,justifyContent:'space-around'}}>
                            <Button style={{padding:10}}  title="Login" /> 
                            <Button style={{padding:10}}  title="SignUp"/>
                        </View>
                        <Button style={{padding:10}}  title="Forgot Password"/>
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
})
