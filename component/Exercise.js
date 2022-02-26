import React from 'react'
import { useCallback,useState } from 'react';
import { ScrollView, View} from 'react-native'
import {Card,Paragraph } from 'react-native-paper';

import YoutubePlayer from "react-native-youtube-iframe";



const Exercise = ({data}) => {
    return (
        <ScrollView >
                {
                    data.map((data,idx) => 
                    <View style={{padding:20}} key={idx}>
                        
                        <Card >
                            <Card.Title title={data.name}  />
                            <Card.Content>
                                <Paragraph>{data.desc}</Paragraph>
                            </Card.Content>
                            <YoutubePlayer
                                height={300}
                                videoId={data.videoId}
                            />
                            <Card.Cover source={{ uri: data.imageUrl }} />
                        </Card>    
                    </View>
                    )
                }
        </ScrollView>
    )
}

export default Exercise
