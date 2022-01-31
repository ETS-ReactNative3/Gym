import React from 'react'
import { View, Text ,StyleSheet, Button ,ImageBackground , Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Homepage = ({navigation}) => {
    return (
        <View>
            <ImageBackground source={require('../assets/b4.jpg')} style={styles.img}>
                <View style={styles.container}>
                                
                <View style={styles.main}>
                    <Button title='Admin' onPress={() => navigation.navigate('Admin')} />
                    <Button title='User' onPress={() => navigation.navigate('User')} />
                </View>
                
                </View>
            </ImageBackground>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    img:{
        height:windowHeight,
        width:windowWidth
    },
    container :{paddingTop : 30},
    main: {
        flexDirection : 'row',
        justifyContent : 'space-around',
        paddingTop : 20
    }
})