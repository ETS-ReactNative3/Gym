import React from 'react'
import { ScrollView, Text } from 'react-native'
import Exercise from '../component/Exercise'

const UserHome = () => {

    return (
        <ScrollView style={{padding:20}}>
            <Text style={{textAlign:"center",fontSize:25}}> Welcome User</Text>
            <Text style={{textAlign:"center",fontSize:25}}> Today is </Text>
            <Exercise/>
        </ScrollView>
    )
}

export default UserHome
