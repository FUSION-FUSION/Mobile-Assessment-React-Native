import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { GlobalStyle } from './GlobalStyle';
import { AntDesign } from '@expo/vector-icons'; 

const images= [
    {title: 'same state', description: 'deliveries within the same state', img: '../assets/ic-bike.png', key: '1'},
    {title: 'Inter state', description: '', img: '', key: '2'},
    {title: '', description: '', img: '', key: '3'},
    {title: '', description: '', img: '', key: '4'},
    {title: '', description: '', img: '', key: '5'},
    {title: '', description: '', img: '', key: '6'},
    {title: '', description: '', img: '', key: '7'},
    {title: '', description: '', img: '', key: '8'}

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
      <View>
        <Text>Send a package</Text>
        <ScrollView>
        <View>
        {images.map((item)=>{
          const {title, img, description, key} = item;
          return(
            <View key={key}>
              <Text>{title}</Text>
            </View>
          )
        })}

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
      
    }
})
export default DashBoard
