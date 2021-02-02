import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Login/SplashScreen'
import SignInScreen from '../Login/SignInScreen'
import SignUpScreen from '../Login/SignUpScreen'

const AuthStack = () => {

    const Stack = createStackNavigator();

   
    return (
        <Stack.Navigator
        screenOptions = {{
            headerShown: false
        }}
        >
            <Stack.Screen name="splash_screen" component={SplashScreen} />
            <Stack.Screen name="sign_in_screen" component={SignInScreen} />
            <Stack.Screen name="sign_up_screen" component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
