import React ,{useState}from 'react'
import {Text,ImageBackground,StyleSheet, Dimensions, View, ScrollView,KeyboardAvoidingView} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { AntDesign } from '@expo/vector-icons'; 
import {Button, Card ,TextInput} from 'react-native-paper'


const AddData = ({navigation}) => {
    const [targetMuscleGroup, setTargetMuscleGroup] = useState();
    const [name, setName] = useState('')
    const [set, setSet] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [videoId, setVideoId] = useState('')
    const [desc,setDesc] = useState('')

    const submitData = () => {
        fetch("http://10.0.2.2:7777/admin/submitData",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "targetMuscleGroup" : targetMuscleGroup,
                "name" : name,
                "imageUrl" : imageUrl,
                "videoId" : videoId,
                "set" : set,
                "desc"  : desc
            })
        }).then( res => res.json()).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <ImageBackground style={styles.img} source={require('../assets/b1.jpg')}>
                    <View style={{padding:10,paddingTop:30}}>
                        <Text style={{textAlign:'center',fontSize:30,paddingBottom:30,fontWeight:'bold'}}>Add Data </Text>
                        <Card>
                            <Card.Content>
                                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                    <Text>Choose Target Muscle Group</Text>
                                    <Picker
                                        selectedValue={value}
                                        onValueChange={(itemValue, itemIndex) =>
                                        setTargetMuscleGroup(itemValue)  
                                    }>
                                        <Picker.Item label="Chest" value="chest" />
                                        <Picker.Item label="Back" value="back" />
                                        <Picker.Item label="Shoulder" value="shoulder" />
                                        <Picker.Item label="Biceps" value="biceps" />
                                        <Picker.Item label="Triceps" value="triceps" />
                                        <Picker.Item label="Legs" value="legs" />
                                    </Picker>
                                </View>
                                <TextInput label="Name" mode="outlined"  onChangeText={(text) => {setName(text)}}/>
                                <TextInput label="ImageUrl" mode="outlined"  onChangeText={(text) => {setImageUrl(text)}}/>
                                <TextInput label="Set" mode="outlined"  onChangeText={(text) => {setSet(text)}}/>
                                <TextInput label="VideoId" mode="outlined"  onChangeText={(text) => {setVideoId(text)}}/>
                                <TextInput label="Description" mode="outlined"  onChangeText={(text) => {setDesc(text)}}/>
                                <Button mode="contained" color='orange' style={{margin:20,borderRadius:7}} onPress={() => submitData()}>Sumbit</Button>
                            </Card.Content>
                        </Card>
                        </View>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddData


const styles = StyleSheet.create({
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height
    }
})