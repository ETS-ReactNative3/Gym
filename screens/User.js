import React from 'react'
import { View, Text ,StyleSheet ,ImageBackground,Dimensions ,Image, ScrollView} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const User = () => {
    return (
        <ScrollView>
            <ImageBackground source={require('../assets/b1.jpg')} style={styles.img}>
                <View >
                    <Image style={styles.topImg} source={require('../assets/img3.jpg')} />
                </View>

                <View style={{backgroundColor:'white',margin:10,borderRadius:20}}>
                    <Text style={{fontSize:20,padding:10,fontWeight:'bold',color:'black'}}>
                        This is called "Bro-Split" type of exercise.
                    </Text>
                </View>

                <View style={{backgroundColor:'white',margin:10,borderRadius:20}}>
                    <Text style={{fontSize:20,padding:10,fontWeight:'bold',color:'black'}}>
                       Click on target muscle group to go to details. 
                    </Text>
                </View>
                
                <View style={styles.day}>
                   
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default User

const styles = StyleSheet.create({
    topImg:{
        padding: 10,
        width:windowWidth,
        height: 190    
    },
    img:{
        height:windowHeight,
        width:windowWidth,
    },

})