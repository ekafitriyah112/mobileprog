import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Splash from '../pages/Splash';

const stack = createNativeStackNavigator();

const router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>

      </Stack.Navigator>
  )
}

export default router;

const styles = StyleSheet.create({})