//import liraries
import React, { Component, useEffect } from 'react';
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
import Svg,{Rect,
Text as TextSvg
} from 'react-native-svg'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Iconhome from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { useRef } from 'react';

// create a component
const HomeScreen = () => {
    
    const { width } = Dimensions.get('window')
    const gap = 15
    const [focused, setfouced] = React.useState("")
    useEffect(()=>{
        alert("Press Plus(+) Icon to View the Task 1.2")
    },[])
    const data = [
        {
            name: 'Workout',
            decs: '2 hours',
            color: '#fff6e9',
            imgc: require('./../../../assets/Images/dumbr.png'),
            img: require('./../../../assets/Images/dumbw.png')


        },
        {
            name: 'Running',
            decs: '12 km',
            color: '#ffefee',
            imgc: require('./../../../assets/Images/running.png'),
            img: require('./../../../assets/Images/runningw.png')

        },
        {
            name: 'Food',
            decs: '1832 kcal',
            color: '#dffdff',
            imgc: require('./../../../assets/Images/foodgr.png'),
            img: require('./../../../assets/Images/foodw.png')

        }
    ]
    let [tooltipPos,setTooltipPos] = React.useState(
        { x:0, y:0, visible:false, value:0 })
    return (
        <>
            <StatusBar hidden={true} />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ width: '100%', height: Dimensions.get('screen').height - 146, paddingTop: 20 }}>
                    <ScrollView>

                        <View style={{ width: '100%', height: 60, flexDirection: 'row', backgroundColor: 'white'}}>
                            <View style={{ height: '100%', width: '20%', justifyContent: 'center',paddingLeft:15 }}>
                                <Image
                                    source={require('./../../../assets/Images/man.png')}
                                    style={{
                                        width: 55,
                                        height: 55
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ height: '100%', width: '60%', justifyContent: 'center', paddingLeft: 8 }}>
                                <Text style={{ fontFamily: 'Gilroy-Light', fontSize: 16, color: '#000' }}>
                                    Hello Yasee!
                                </Text>
                                <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 16, color: '#000' }}>
                                    Thursday, 08 July
                                </Text>
                            </View>
                            <View style={{ height: '100%', width: '20%',justifyContent:'center',alignItems:"flex-end",paddingRight:15}}>
                                        <View style={{width:55,height:55,borderRadius:40,borderWidth:1,borderColor:"#d7d7d7",justifyContent:'center',alignItems:'center'}}>
                                        <Image
                                    source={require('./../../../assets/Images/notification.png')}
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                    resizeMode="contain"
                                />
                                        </View>
                            </View>
                        </View>

                        <View style={{ width: '100%', height: 145, flexDirection: 'row', backgroundColor: '#fff', marginTop: 20, }}>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                decelerationRate='fast'
                                contentContainerStyle={{ paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}
                                showsHorizontalScrollIndicator={false}
                                snapToInterval={(width / 3) * 2}>
                                {
                                    [1, 2, 3].map((item, index) => (

                                        <View key={index} style={{ height: '100%', width: (width / 2.8) * 2, backgroundColor: item === 1 ? '#fff6e9' : item === 2 ? "#ecf9fc" : "#FFF1F0", marginRight: gap, borderRadius: 25, flexDirection: 'row' }}>
                                            <View style={{ width: '45%', justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    source={require('./../../../assets/Images/lotus.png')}
                                                    style={{
                                                        width: 90,
                                                        height: 90

                                                    }}
                                                    resizeMode="contain"

                                                />
                                            </View>
                                            <View style={{ width: '55%', justifyContent: 'center' }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{ backgroundColor: '#ffffff', width: "50%", justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 14, color: 'red' }}>
                                                                FITNESS
                                                            </Text>
                                                        </View>

                                                        <View style={{ paddingRight: 15 }}>
                                                            <SimpleLineIcons
                                                                name='options-vertical'
                                                                size={18}
                                                                color="#000"
                                                                style={{ bottom: 10 }}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ marginTop: 10 }}>
                                                    <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 20, color: '#000' }}>
                                                        Training Yoga
                                                    </Text>
                                                    <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 20, color: '#000' }}>
                                                        Class 101
                                                    </Text>
                                                    <Text style={{ fontFamily: 'Gilroy-Light', fontSize: 12, color: '#A09a93' }}>
                                                        Starting Date: 12 Apr
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    ))
                                }

                            </ScrollView>
                        </View>

                        <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 17, color: '#000', marginLeft: 15, marginTop: 20 }}>
                            My Plan
                        </Text>

                        <View style={{ width: '100%', height: 170, flexDirection: 'row', backgroundColor: 'white', marginTop: 20, }}>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                decelerationRate='fast'
                                contentContainerStyle={{ paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}
                                showsHorizontalScrollIndicator={false}
                                snapToInterval={(width / 3) * 2}>
                                {
                                    data.map((item, index) => (

                                        <TouchableOpacity key={index} style={{ height: '100%', width: (width / 3) * 1, backgroundColor: focused === index ? "#000" : null, marginRight: gap, borderRadius: 25, flexDirection: 'row' }} onPress={() => {
                                            setfouced(index)
                                        }}>
                                            {
                                                focused === index ? <>
                                                    <View
                                                        style={{
                                                            height: '100%', width: '100%', borderRadius: 25, flexDirection: 'column', backgroundColor: '#000'
                                                        }}
                                                    >
                                                        <View style={{ height: '30%', justifyContent: 'center', paddingTop: 10, paddingLeft: 20 }}>
                                                            <Image source={item.img} style={{
                                                                width: 25,
                                                                height: 25,
                                                            }}></Image>
                                                        </View>
                                                        <View style={{ height: '70%', justifyContent: 'center', paddingTop: 10, paddingLeft: 20 }}>
                                                            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#fff' }}>{item.name}</Text>
                                                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 18, color: '#a7a7a7' }}>{item.decs}</Text>

                                                        </View>
                                                    </View>
                                                </> : <>
                                                    <LinearGradient

                                                        start={{ x: 1, y: 0 }} colors={[item.color, '#ffffff']}
                                                        style={{
                                                            height: '100%', width: '100%', borderRadius: 25, flexDirection: 'column'
                                                        }}
                                                    >
                                                        {/* <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#fff', textAlign: 'center' }}>ADD</Text> */}
                                                        <View style={{ height: '30%', justifyContent: 'center', paddingTop: 10, paddingLeft: 20 }}>
                                                            <Image source={item.imgc} style={{
                                                                width: 25,
                                                                height: 25,
                                                            }}></Image>
                                                        </View>
                                                        <View style={{ height: '70%', justifyContent: 'center', paddingTop: 10, paddingLeft: 20 }}>
                                                            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#000' }}>{item.name}</Text>
                                                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 18, color: '#787676' }}>{item.decs}</Text>

                                                        </View>
                                                    </LinearGradient>
                                                </>
                                            }

                                        </TouchableOpacity>
                                    ))
                                }

                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15 }}>
                            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 17, color: '#000', marginLeft: 15, marginTop: 20 }}>
                                Activities
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 17, color: '#000', marginTop: 20 }}>
                                    Weekly
                                </Text>
                                <MaterialIcons
                                    name='keyboard-arrow-down'
                                    color={"#000"}
                                    size={18}
                                    style={{
                                        marginTop: 20,
                                        top: 2
                                    }}
                                />
                            </View>


                        </View>
                        <View style={{ width: '100%', height: 250, flexDirection: 'row', marginTop: 20,paddingLeft:15}}>
                            
                            <LineChart
                                data={{
                                    labels: ["Sat","Sun","Mon", "Tue", "Wed", "Thu", "Fri"],
                                    datasets: [
                                        {
                                            data: [
                                                200,
                                                236,
                                                196,
                                                256,
                                                150,
                                                300,
                                                100
                                            ]
                                        }
                                    ]
                                }}
                                fromZero={true}
                                onDataPointClick={
                                    (data) => {
                                       // check if we have clicked on the same point again
                                       let isSamePoint = (tooltipPos.x === data.x 
                                                           && tooltipPos.y ===  data.y)
                                     
                                       // if clicked on the same point again toggle visibility
                                       // else,render tooltip to new position and update its value
                                       isSamePoint ? setTooltipPos((previousState)=> {
                                                          return {
                                                               ...previousState, 
                                                               value: data.value,
                                                               visible: !previousState.visible}
                                                          })
                                                    : 
                                                  setTooltipPos({x: data.x, 
                                                     value: data.value, y: data.y,
                                                     visible: true
                                                  });
                                     } // end function
                                  }
                                width={Dimensions.get("window").width} // from react-native
                                height={250}
                                decorator={() => {
                                    return tooltipPos.visible ? <View>
                                     <Svg>
                                        <Rect x={tooltipPos.x -35} y={tooltipPos.y + 10} width="65"  
                                         height="30" fill="black"  rx="10"/>
                                        <TextSvg
                                           x={tooltipPos.x -15}
                                           y={tooltipPos.y + 30}
                                           fill="white"
                                           fontSize="14"
                                           fontWeight="bold"
                                           fontFamily='Gilroy-Bold'
                                           
                                           textAnchor="middle">
                                           {tooltipPos.value} Kcl
                                        </TextSvg>
                                     </Svg>
                                 </View> : null
                                 }}
                                yAxisInterval={1} // optional, defaults to 1
                                chartConfig={{
                                    backgroundColor: "#ffffff",
                                    fillShadowGradientFromOffset:1,
                                    fillShadowGradientToOffset:1,
                                    backgroundGradientFrom: "#fff",
                                    backgroundGradientTo: "#fff",
                                    color: (opacity = 1) => `rgba(33, 160, 170, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#21A0AA"
                                    },
                                    propsForLabels:{
                                        fontFamily:'Gilroy-Light'
                                    }
                                }}
                                bezier
                                
                            />
                        </View>
                    </ScrollView>

                </View>

            </View>

        </>
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
export default HomeScreen;
