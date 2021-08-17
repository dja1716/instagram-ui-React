import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import instaLogo from "../components/resources/pictures/instaLogo.png";
import DM from "../components/resources/pictures/messageWhite.png";
import profile1 from "../components/resources/pictures/profile1.jpg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-paper';
import Comment from './Comment';
import moment from 'moment';
import 'moment/locale/ko';

const Homepage = () => {
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const [comment, setComment] = useState("");
    const [commentId, setCommentId] = useState(0);
    const [Data, setData] = useState([
        {
            postId: 0,
            username: "Hyeon",
            img: profile1,
            liked: false,
            comments: [],
        },
        {
            postId: 1,
            username: "Um",
            img: profile1,
            liked: false,
            comments: [],
        },
        {
            postId: 2,
            username: "One More",
            img: profile1,
            liked: false,
            comments: [],
        },
    ]);
    
    return (
        <View style={{flex: 1, height: 100, backgroundColor:"black"}}>
            <ScrollView style={{flex:1}}>
                <Image source={instaLogo} style={{width:120, height:35, marginLeft:20, tintColor:"white", marginTop:30, marginBottom:5}}/>
                <View>
                    <Image source={DM} style={{width:30, height:30, tintColor:"white", alignSelf:"flex-end", marginRight:20, marginTop:-40}}/>
                </View>
                <ScrollView horizontal={true}>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                    <Image source={profile1} style={{width:60,height:60,borderRadius:60/2,marginLeft:10}}/>
                </ScrollView>
                {Data.map((item, idx)=>{
                    return(
                        <View key={item.postId}>
                            <View style={{flexDirection:"row",borderTopColor:"grey", borderTopWidth:1, marginTop:5}}>
                                <Image source={item.img} style={{width:30,height:30,borderRadius:30/2, margin:5, marginBottom:10}}/>
                                <Text style={{color:"white", fontSize:18, marginBottom:5,marginLeft:10, fontWeight:"bold", marginTop:5,}}>{item.username}</Text>
                            </View>
                            <ScrollView horizontal={true} decelerationRate={0} snapToInterval={410} snapToAlignment={"center"}>
                                <Image source={item.img} style={{width:400,height:250,borderRadius:10, marginLeft:5, marginRight:5}}/>
                                <Image source={item.img} style={{width:400,height:250,borderRadius:10, marginLeft:5, marginRight:5}}/>
                                <Image source={item.img} style={{width:400,height:250,borderRadius:10, marginLeft:5, marginRight:5}}/>
                                <Image source={item.img} style={{width:400,height:250,borderRadius:10, marginLeft:5, marginRight:5}}/>
                                <Image source={item.img} style={{width:400,height:250,borderRadius:10, marginLeft:5, marginRight:5}}/>
                            </ScrollView>
                            <View style={{flexDirection:"row"}}>
                                <Button onPress={()=>{
                                        if(item.liked === false) {
                                            //item.liked = true;
                                            Data[idx].liked = true;
                                        } else {
                                            //item.liked = false;
                                            Data[idx].liked = false;
                                        }

                                        var temp = Data.slice(0, Data.length-1).concat(Data.slice(Data.length-1, Data.length));
                                        setData(temp);
                                    }}>
                                    <MaterialCommunityIcons name="heart-outline" size={30} color={item.liked ? 'red' : 'white'} style={{margin: 10}}/>
                                </Button>
                                <EvilIcons name="comment" size={30} color="white" style={{margin:10}}/>
                                <Feather name="send" size={28} color="white" style={{margin:10}}/>
                            </View>
                            <View style={{flexDirection:"column"}}>
                                <View style={{flexDirection:"row-reverse"}}>
                                    <Button onPress={()=>{
                                        if(comment !== '') {
                                            setCommentId(commentId + 1);
                                            item.comments.push({content: comment, time: nowTime, commentId: commentId});
                                            var temp = Data.slice(0, Data.length-1).concat(Data.slice(Data.length-1, Data.length));
                                            setData(temp);
                                            setComment('');
                                        }
                                    }}>
                                        <Feather name="send" size={28} color="white" style={{margin:10}}/>
                                    </Button>                                
                                    <TouchableOpacity style={{width: "80%"}}>
                                        <TextInput placeholder="Add comment..." 
                                            placeholderTextColor="lightgrey" 
                                            style={{color: "white", paddingLeft:5, margin:5, backgroundColor: "#3b3b3b", width:"100%", alignSelf:"center", borderRadius:5, height:35}}
                                            onChangeText={setComment}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {item.comments.map(c => {
                                    return(
                                        <Comment key={c.commentId} content={c.content} time={c.time}/>
                                    );
                                })}
                                
                                
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

export default Homepage;