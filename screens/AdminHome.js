import React from 'react'
import { ScrollView, Text, ImageBackground,StyleSheet, Dimensions, View} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import {Button, Card,  Paragraph} from 'react-native-paper'

const AdminHome = ({navigation}) => {

    return (
        <ScrollView>
            <ImageBackground style={styles.img} source={require('../assets/b2.jpg')}>
                <View style={{paddingTop:20,padding:10}}>
                    <Card >
                        <Card.Title title="Add Exercises" subtitle="Add Exercises for members" />
                        <Card.Content>
                            <Paragraph>Select Muscle group from Dropdown and Provide following details : </Paragraph>
                            <View>
                                <View style={{flexDirection:'row',padding:5,justifyContent:'space-around'}}>
                                    <AntDesign name="checkcircle" size={24} color="red" /> 
                                    <Text style={{marginLeft:37}}>Name</Text>
                                </View>
                                <View style={{flexDirection:'row',padding:5,justifyContent:'space-around'}}>
                                    <AntDesign name="checkcircle" size={24} color="red" /> 
                                    <Text style={{marginLeft:48}}>Sets</Text>
                                </View>
                                <View style={{flexDirection:'row',padding:5,justifyContent:'space-around'}}>
                                    <AntDesign name="checkcircle" size={24} color="red" /> 
                                    <Text style={{marginLeft:20}}>ImageUrl</Text>
                                </View>
                                <View style={{flexDirection:'row',padding:5,justifyContent:'space-around'}}>
                                    <AntDesign name="checkcircle" size={24} color="red" /> 
                                    <Text style={{marginLeft:25}} >VideoId</Text>
                                </View>
                                <View style={{flexDirection:'row',padding:5,justifyContent:'space-around'}}>
                                    <AntDesign name="checkcircle" size={24} color="red" /> 
                                    <Text style={{marginLeft:1}}>Description</Text>
                                </View>
                            </View> 
                        </Card.Content>
                        
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate('AddData')}>Ok</Button>
                        </Card.Actions>

                    </Card>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default AdminHome

const styles = StyleSheet.create({
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height
    }
})