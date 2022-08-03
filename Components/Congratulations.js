
import React from 'react'
import {  Text, ImageBackground, Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import { GlobalStyle } from './GlobalStyle'

const Congratulations = () => {
  return (
    <ImageBackground source={require("../assets/bg-app-cloud.png")} >
     <View>
      <Text style={GlobalStyle.header}>Congratulations!</Text>
    <Image source={require('../assets/ic-congratulations.png')} style={{ height: '25rem', marginTop:'2rem'}}/>
    </View>
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
            Continue
        </Text>
    </TouchableOpacity>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
btn:{
    backgroundColor: '#30A5BF',
    width: '5rem',
    height: '2.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '2rem',
    marginHorizontal: 'auto'
},
btnText:{
    color: '#ffff'
}
})
export default Congratulations
