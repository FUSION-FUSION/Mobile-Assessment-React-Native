import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, FlatList } from 'react-native'
import { GlobalStyle } from './GlobalStyle';
import { AntDesign } from '@expo/vector-icons'; 

  const data=[
    {title: 'Waybill History', description: 'Records of all your waybills',  key: '5'},
    {title: '', description: 'Get help & support from our team',  key: '6'},
  ] 

const DashBoard = () => {
  return (
    <ImageBackground source={require('../assets/bg-app-cloud.png')} style={GlobalStyle.background}>
     <View style={styles.card}>
      <View>
        <Text>Total Balance</Text>
        <Text>₦ 50,000</Text>
      </View>
      <View style={{position: 'relative'}}>
        <TouchableOpacity style={styles.btn} >
            <Text style={styles.topUp}>Top up <AntDesign name="doubleright" size={10} color="#fff" /></Text>
        </TouchableOpacity>
        <Image source={require("../assets/bg-dashboard-balance.png")} style={{height: '6rem', width: '12rem', borderBottomRightRadius: 15}}/>
      </View>
      </View>
      <View style={styles.card1}>
        <Text style={styles.header}>Track your waybill</Text>
        <View style={styles.inputContainer}>
        <TextInput placeholder='waybill number' style={styles.input}/>
        <TouchableOpacity style={styles.trackBtn}>
          <Text style={styles.track}>Track</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imagesWrapper}>
        <Text style={GlobalStyle.header}>Send a package</Text>

        <ScrollView>
        <View style={styles.imagesView}>
        
          <View style={styles.imagesContainer}>
            <Text>same state</Text>
          <Text>deliveries within the same state</Text>
          <Image source={require('../assets/ic-bike.png')} style={{height: '3rem', width: '3rem'}}/>
        </View>
        <View style={styles.imagesContainer}>
            <Text >Inter state</Text>
          <Text>deliveries outside your current state</Text>
          <Image source={require('../assets/DeliveryVan.png')} style={{height: '3rem', width: '3rem'}}/>
        </View>
        <View style={styles.imagesContainer}>
            <Text>Charter</Text>
          <Text>Request a vehicle</Text>
          <Image source={require('../assets/ic-truck.png')} style={{height: '3rem', width: '3rem'}}/>
        </View>
        <View style={styles.imagesContainer}>
            <Text>International</Text>
          <Text>send packages to other countries</Text>
          <Image source={require('../assets/ic-aeroplane.png')} style={{height: '3rem', width: '3rem'}}/>
        </View>
          
       

</View>
</ScrollView>
      </View>
      
    </ImageBackground>
  )
}

const styles= StyleSheet.create({

    card:{
        marginVertical: 15,
        justifyContent: 'space-between', 
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: '#fff',
        paddingTop: '1rem',
        borderRadius: 25,
        paddingLeft: 10,
    
    },
    card1:{
        marginVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingLeft: 10,
        height: '9rem',
        alignItems:'center',
    
    },
    btn:{
        backgroundColor: '#30A5Bf',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: '1.4rem',
        marginRight: 10,
        flexDirection: 'row'
    },
    topUp:{
        color:'#fff',
    },
    header:{
        fontSize: 20,
        fontWeight: '400',
        marginVertical: 30

    },
    inputContainer:{
      position:"relative",
      width: '16rem',

    },
    input:{
      border: 'solid 1px #30A5Bf',
      height: '2.5rem',
      borderRadius: 15,
      paddingHorizontal: 10,

    },
    imagesView:{
      flex: 1,
      flexDirection: 'row'
    },
    track:{
      color: '#ffff',
    },
    trackBtn:{
      backgroundColor: '#30A5Bf',
        paddingVertical: 8,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop:2,
        marginRight:4,
    },
    imagesContainer:{
      marginTop: 20,
      backgroundColor: '#fff',
      borderRadius: 5,
      width: '10rem',
      padding: 10,
      marginHorizontal: 5

    },
    imagesWrapper:{
      flex: 1,
      marginTop: 20,
      
      
    }
})
export default DashBoard
