import React from 'react';
import { View, Text, Button } from 'react-native';

const Comment = (props) => {
    return (
        <View>
            <Text style={{color:"white", textAlign:"right", paddingTop: 3, paddingRight:8, marginLeft:20, marginRight:20,borderTopColor:"grey", borderTopWidth:1}}>
                {props.content}
            </Text>
            <Text style={{color:"grey", textAlign:"right", marginLeft:20, marginRight:20, paddingRight:8}}>
                {props.time}
            </Text>
        </View>
    )
}

export default Comment;