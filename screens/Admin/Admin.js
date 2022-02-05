import React from 'react'
import { View, Text, ImageBackground,Dimensions,StyleSheet} from 'react-native'
import {TextInput,Button} from 'react-native-paper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Admin = () => {
    return (
        <View>
            <ImageBackground source={require('../../assets/b2.jpg') } style={styles.img}>
                <View>
                    <Text style={{color:'white',textAlign:'center',padding:20,fontSize:20}}>Welcome</Text>
                    <Text style={{color:'white',textAlign:'center',padding:10,fontSize:20}}>Login to Continue</Text>
                    <View style={styles.line}/>
                    <View >
                        <TextInput label="Email" mode="outlined" style={styles.textInput} />
                        <TextInput label="Password" mode="outlined" style={styles.textInput} />
                        <Button style={styles.textInput} mode="contained" color="yellow" >Login</Button>                
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
