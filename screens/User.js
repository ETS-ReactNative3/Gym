import React from 'react'
import { View, Text ,StyleSheet ,ImageBackground,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const User = () => {
    return (
        <View>
            <ImageBackground source={require('../assets/b1.jpg')} style={styles.img}>
                <View style={styles.container}></View>
            </ImageBackground>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    container :{paddingTop : 35},
    img:{
        height:windowHeight,
        width:windowWidth
    },
})