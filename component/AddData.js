import React ,{useState}from 'react'
import {Text,ImageBackground,StyleSheet, Dimensions, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { AntDesign } from '@expo/vector-icons'; 
import {Button, Card } from 'react-native-paper'


const AddData = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState('Select');
    return (
        <ImageBackground style={styles.img} source={require('../assets/b1.jpg')}>
            <View style={{padding:10,paddingTop:30}}>
                <Card>
                    <Card.Title title="Add Data For Users" />
                    <Card.Content>    
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Chest" value="Chest" />
                        <Picker.Item label="Back" value="Back" />
                        <Picker.Item label="Shoulder" value="Shoulder" />
                        <Picker.Item label="Biceps" value="Biceps" />
                        <Picker.Item label="Triceps" value="Triceps" />


                    </Picker>
                    </Card.Content>
                
                {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions> */}
                </Card>
                </View>
        </ImageBackground>
    )
}

export default AddData


const styles = StyleSheet.create({
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height
    }
})