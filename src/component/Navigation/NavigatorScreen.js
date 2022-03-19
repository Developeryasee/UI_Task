import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Image, Platform, StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from '../splash/splashScreen';
import Login from '../login/loginScreen';
import SignUp from '../SignUp/SignUp';
import BottomNavigationScreen from './BottomNavigationScreen';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { SampleReducer } from '../reducer/SampleReducer';
import { Provider } from "react-redux"
import { AuthContext } from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task2 from './Task(1.2)';
import Icon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Stack = createStackNavigator();
const NavigatorScreen = () => {
  React.useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      userToken = await AsyncStorage.getItem('user_token')
      dispatch({ type: 'RETREIVE_TOKEN', token: userToken })
    }, 2000)

  }, []);
  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {

      case 'RETREIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };

    }
  };
  //*************************************************************************************************//
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext = React.useMemo(() => ({
    signIn: async () => {
      let userToken = null;
      userToken = await AsyncStorage.getItem('user_token');
      dispatch({ type: 'LOGIN', token: userToken })
    },
    signOut: async () => {
      console.log("LOGOUT");
      await AsyncStorage.removeItem('user_token');
      dispatch({ type: 'LOGOUT' })

    }

  }), []);
  const rootReducer = combineReducers({
    sample: SampleReducer
  })
  let store = createStore(rootReducer);

  return (

    <AuthContext.Provider value={authContext}>

      <Provider store={store}>
        <StatusBar hidden={true} />

        <NavigationContainer>
          <Stack.Navigator initialRouteName="task1_1">
            {/* if you want to see the task 1.2 design, kindly change initialRouteName from task1_1 to task1_2 in debug mode*/}
            <Stack.Screen
              name='task1_1'
              component={BottomNavigationScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='task1_2'
              component={Task2}
              options={{

                headerLeft: null,


                header:    // Your custom header
                  props =>
                    <View style={{
                      flexDirection: "row",
                      height: 120,
                      backgroundColor: '#f4f4f4'

                    }}>
                      <View style={{
                        backgroundColor: '#Efeff1',
                        height: "100%",
                        width: '100%',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40, paddingLeft: 10
                      }}>

                        <View style={{ width: '100%', height: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                          <View style={{ width: "5%", }}>
                            <Icon
                              onPress={() => props.navigation.goBack()}
                              name='md-arrow-back'
                              size={18}
                              color="#000"
                            />
                          </View>
                          <View style={{ width: "85%", paddingLeft: 5 }}>
                            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 20, color: '#3d3d3f' }}>
                              10
                            </Text>
                          </View>
                          <View style={{ width: "10%", height: '100%', justifyContent: 'center' }}>
                            <SimpleLineIcons
                              name='options-vertical'
                              size={16}
                              color="#4d4d4f"
                            />
                          </View>


                        </View>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                          <View style={{ backgroundColor: '#eaeaec', width: 70, height: 25, borderRadius: 5, marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 16, color: '#767676' }}>
                              Maths
                            </Text>
                          </View>
                          <View style={{ backgroundColor: '#eaeaec', width: 130, height: 25, borderRadius: 5, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 16, color: '#767676' }}>
                              Social Science
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>,

              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>

  )

}

export default NavigatorScreen;