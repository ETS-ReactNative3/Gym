import React ,{useState,useCallback} from 'react'
import {  Text } from 'react-native'
import {Card,Title,Paragraph,Button} from 'react-native-paper'
import YoutubePlayer from "react-native-youtube-iframe";

const Exercise = () => {

    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);
        const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);



    return (
        <Card >
            <Button  />
            <Title style={{textAlign:'center'}}><Card.Title title="Chest Exercises"/></Title>
            
            <Card.Content>
                <Title style={{paddingLeft:5}}>Flat Bench Press</Title>
                <Card.Cover source={{uri : 'https://bodybuilding-wizard.com/wp-content/uploads/2014/03/flat-barbell-bench-press-0-1-2-2-1.jpg'}}/>
                <Text style={{fontSize:18}}>Number of Rep= 20,18,15</Text>
                    <Paragraph style={{padding:4}}>
                        The bench press, or chest press, is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles.
                    </Paragraph>
                    {/* <YoutubePlayer height={300} videoId={"rT7DgCr-3pg"}    /> */}
                </Card.Content>
        </Card>
    )
}

export default Exercise
