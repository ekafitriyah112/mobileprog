import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { About2 } from '../../assets'


const Home = ({}) => {

  return (
    <ImageBackground source={About2} style={styles.latar}>
      <Text> Home </Text> 
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  background: {

    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 100,
  }
})