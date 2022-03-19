
import React, { useEffect } from 'react';
import { Animated, Dimensions, Image, StatusBar, ScrollView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import Svg, {
    Rect,
    Text as TextSvg
} from 'react-native-svg'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Iconhome from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { useRef } from 'react';
import { set } from 'react-native-reanimated';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function BottomNavigationScreen({ navigation }) {
    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#f1f4fa',
                    position: 'absolute',
                    bottom: 16,
                    marginHorizontal: 15,
                    height: 60,
                    borderRadius: 40,

                    paddingHorizontal: 20,
                    shadowColor: '#fff',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    },
                }
            }}>

                <Tab.Screen name={"Home"} component={HomeScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <Iconhome
                                name="md-home"
                                size={20}
                                color={focused ? '#21A0AA' : 'gray'}
                            ></Iconhome>
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

                <Tab.Screen name={"Food"} component={Foodscreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            {
                                focused ? <>
                                    <Image source={require('./../../../assets/Images/foodgr.png')} style={{
                                        width: 20,
                                        height: 20,
                                    }}></Image>
                                </> : <>

                                    <Image source={require('./../../../assets/Images/foodg.png')} style={{
                                        width: 20,
                                        height: 20,
                                    }}></Image>
                                </>
                            }
                        </View>
                    )
                }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth(),
                                useNativeDriver: true
                            }).start();
                        }
                    })}></Tab.Screen>




                <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
                    
                    tabBarIcon: ({ focused }) => (

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('task1_2')
                            }}
                        >
                            <View style={{
                                width: 55,
                                height: 55,
                                backgroundColor: '#f94546',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: Platform.OS == "android" ? 50 : 30
                            }}>
                                <Icon
                                    name="plus"
                                    size={20}
                                    color='#fff'
                                ></Icon>
                            </View>
                        </TouchableOpacity>
                    )
                }}></Tab.Screen>

                <Tab.Screen name={"Gym"} component={Gym} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            {
                                focused ? <>
                                    <Image source={require('./../../../assets/Images/dumbcolor.png')} style={{
                                        width: 20,
                                        height: 20,
                                    }}></Image>
                                </> : <>

                                    <Image source={require('./../../../assets/Images/dumlight.png')} style={{
                                        width: 20,
                                        height: 20,
                                    }}></Image>
                                </>
                            }

                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

                <Tab.Screen name={"Analyze"} component={Analyze} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <Entypo
                                name="pie-chart"
                                size={20}
                                color={focused ? '#21A0AA' : 'gray'}
                                style={{ transform: [{ rotate: '90deg' }] }}
                            ></Entypo>
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 4,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

            </Tab.Navigator>


        </>
    );
}

function getWidth() {
    let width = Dimensions.get("window").width

    // Horizontal Padding = 20...
    width = width - 80

    // Total five Tabs...
    return width / 5
}

function EmptyScreen({navigation}) {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    );
}

function Analyze() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Analytical Screen
            </Text>

        </View>
    );
}



function Gym() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Gym Screen
            </Text>

        </View>
    );
}

function Foodscreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Food Screen
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
    },
    textStyle: {
        fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#21A0AA'
    }
});