import React from 'react'
import {ScrollView, View, Text ,Image } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Exercise = ({data}) => {
    return (
        <ScrollView >
                {
                    data.map((data,idx) => 
                    <View style={{padding:20}}>
                        <Card key={idx}>
                            <Card.Title title={data.name}  />
                            <Card.Content>
                                <Paragraph>{data.desc}</Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: data.imageUrl }} />
                        </Card>    
                    </View>
                    )
                }
        </ScrollView>
    )
}

export default Exercise
