import React ,{useState} from 'react'
import { View,ScrollView,StyleSheet, Alert,Text} from 'react-native'
import {Button} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker'
import Exercise from './Exercise';

const Api = () => {
    const [selectedValue, setSelectedValue] = useState();
    const [eData,setData] = useState([])

    const fetchData = () => {
        if(selectedValue == null){
            Alert.alert("Select Target Muscle Group To Fetch data")
            return
        }
        fetch("https://nsgymbackend.herokuapp.com/user",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "targetMuscleGroup" : selectedValue,  
            })
        }).then((res) => res.json()).
        then(data => {
            setData(data.result)  
        }).catch(err => {
            console.log(err)
        })
        
    }
    return (
        <ScrollView>
            <View style={styles.main}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 ,color:'white'}}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue)
                }}>
                    <Picker.Item label="Select" value={null} />
                    <Picker.Item label="Yoga" value="yoga"/>
                    <Picker.Item label="Cardio" value="cardio"/>
                    <Picker.Item label="Chest" value="Chest" />
                    <Picker.Item label="Back" value="back" />
                    <Picker.Item label="Shoulder" value="shoulder" />
                    <Picker.Item label="Biceps" value="biceps" />
                    <Picker.Item label="Triceps" value="triceps" />
                    <Picker.Item label="Legs" value="legs"/>
                </Picker>
                    <Button mode="contained" color='orange' style={{margin:20,borderRadius:7}}  onPress={() => fetchData()}> Get</Button>
            </View>
            <Exercise data={eData} />
        </ScrollView>
    )
}

export default Api

const styles = StyleSheet.create({
    main : {
      flexDirection : 'row',
      justifyContent : 'space-around',
      paddingTop : 30,
      
    },
    heading :{
        padding: 10,
        fontSize : 15,
        fontWeight : 'bold',    
        textAlign : 'center',
        color:'white'
    },
    data:{
        padding: 5,
    }
})