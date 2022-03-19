//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
// create a component

function Students() {
    return <>
        <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{width:'100%',height:'50%',justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 14, color: '#939396' }}>
                                                                Classroom ID: 2456744421
                 </Text>
                 <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 14, color: '#7f53fe',marginTop:30 ,marginBottom:40}}>
                                                                Invite Students
                 </Text>
                </View>
                <View style={{width:'100%',height:'50%',justifyContent:'flex-end',alignItems:'center'}}>
                <TouchableOpacity style={{width:'85%',backgroundColor:'#7f53fe',height:50,marginBottom:65,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 14, color: '#fff'}}>
                                                                Add Student
                 </Text>
                </TouchableOpacity>
                </View>
    
        </View>
    </>
}
function Attendance() {
    return <>
        <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#7f53fe'}}>
        Attendance
                 </Text>
        </View>
    </>
}
function Homework() {
    return <>
          <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#7f53fe'}}>
        Homework
                 </Text>
        </View>
    </>
}
function Tests() {
    return <>
        <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#7f53fe'}}>
        Tests
                 </Text>
        </View>
    </>
}
const Task2= () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 14 ,fontFamily:'Gilroy-Bold'},
            tabBarItemStyle: { width: 'auto',justifyContent:'center',alignItems:'center' },
            tabBarIndicatorContainerStyle:{
                width:'auto',
                
            },
            tabBarStyle: { backgroundColor: '#f4f4f4' },
            tabBarIndicatorStyle:{
               borderBottomWidth:4,
               borderColor:'#7f53fe',
            },
            tabBarActiveTintColor:'#7f53fe',
            tabBarInactiveTintColor:'#767676'
          }}
        >
            <Tab.Screen name="Students" component={Students} />
            <Tab.Screen name="Attendance" component={Attendance} />
            <Tab.Screen name="Homework" component={Homework} />
            <Tab.Screen name="Tests" component={Tests} />

        </Tab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Task2;
