import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, About, Contact} from '../screen'; 



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const MainApp = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="About" component={About} options={{headerShown: false}} />
      <Tab.Screen name="Contact" component={Contact} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})