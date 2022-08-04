
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const Header = () => {
  return (
    <View style={styles.header}>
        <FontAwesome5 name="align-left" size={24} color="black" />
      <Text style={styles.headerText}>Hello, John</Text>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
  )
}

const styles= StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText:{
      fontSize: 20,
      fontWeight:500,
      marginHorizontal: 70
    }
})
export default Header
