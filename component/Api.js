import React ,{useState} from 'react'
import { View,ScrollView,Text,StyleSheet, Alert} from 'react-native'
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

        fetch("http://10.0.2.2:7777/user",{
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
            <Text style={styles.heading}>Select a Muscle Group to Fetch Data</Text>

            <View style={styles.main}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue)
                }}>
                    <Picker.Item label="Select" value={null} />
                    <Picker.Item label="Chest" value="Chest" />
                    <Picker.Item label="Back" value="Back" />
                    <Picker.Item label="Shoulder" value="Shoulder" />
                    <Picker.Item label="Biceps" value="Biceps" />
                    <Picker.Item label="Triceps" value="Triceps" />
                    </Picker>
                    <Button mode="contained" color='orange' style={{margin:20,borderRadius:7}}  onPress={() => fetchData()}> Get</Button>
            </View>

            <Exercise data={eData}/>
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
        fontSize : 15,
        fontWeight : 'bold',    
        textAlign : 'center'
    },
    data:{
        padding: 5,
    }
})