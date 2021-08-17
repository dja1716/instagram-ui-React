import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homepage from './Homepage';
import Explore from './Explore';
import Activity from './Activity';
import Profile from './Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();


const Main = () => {
    return (
        <Tab.Navigator barStyle={{backgroundColor: "black"}}>
            <Tab.Screen name="Home" component={Homepage} options={{tabBarIcon:({color, size}) =>{
                return <MaterialCommunityIcons name="home-variant" size={26} color={color}/>
            }}} />
            <Tab.Screen name="Explore" component={Explore} options={{tabBarIcon:({color, size}) =>{
                return <IonIcons name="search" size={26} color={color}/>
            }}} />
            <Tab.Screen name="Activity" component={Activity} options={{tabBarIcon:({color, size}) =>{
                return <MaterialCommunityIcons name="heart-outline" size={26} color={color}/>
            }}} />
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({color, size}) =>{
                return <MaterialCommunityIcons name="account-circle" size={26} color={color}/>
            }}} />
        </Tab.Navigator>
    )
}

export default Main;