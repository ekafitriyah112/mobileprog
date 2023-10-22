import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native'
const App = () => {
  return (
    <View style={{backgroundColor: 'yellow', paddingTop:30, flex:1}}>
    <StatusBar
    barStyle='light-content'
    backgroundColor='black'
/>
        
      
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
    marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 20,}}> 
      Fashion Hijabers
      </Text>
    </View>
  );
}

export default App;