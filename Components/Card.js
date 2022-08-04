
import React from 'react'
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { GlobalStyle } from './GlobalStyle';


const images = [
    {
      title: "Same state",
      description: "Deliveries within the same state",
      bg:{'background': require('../assets/icon.png')},
      img: {
        pic: require("../assets/ic-bike.png"),
        pic2: require("../assets/ic-road-same-state.png"),
      },
      key: "1",
    },
    {
      title: "Inter state",
      description: "Deliveries outside your current state",
      bg:{'background': require('../assets/ic-curve.png')},
      img: {
        pic: require("../assets/DeliveryVan.png"),
        pic2: require("../assets/ic-road-interstate.png"),
      },
      key: "2",
    },
    {
      title: "Charter",
      description: "Request a vehicle",
      bg: require('../assets/ic-curve.png'),
      img: {
        pic: require("../assets/ic-truck.png"),
        pic2: require("../assets/ic-road-charter.png"),
      },
      key: "3",
    },
    {
      title: "International",
      description: "send packages to other countries",
      img: { pic: require("../assets/ic-aeroplane.png") },
      key: "4",
    },
  ];

const Card = () => {
  return(
    <View style={styles.imagesWrapper}>
    <Text style={GlobalStyle.header}>Send a package</Text>

    <FlatList
      numColumns={2}
      data={images}
      renderItem={({ item }) => (
        <View style={styles.imagesView}>
          <View style={GlobalStyle.imagesContainer}>
            <Text style={GlobalStyle.title}>{item.title}</Text>
            <span
              style={{
                width: 30,
                backgroundColor: "#30A5Bf",
                height: 3,
                display: "flex",
                marginTop: 5,
                marginBottom: 5,
              }}
            />
            <Text>{item.description}</Text>
            <Image
              source={item.img.pic}
              style={{ height: "5rem", width: "5rem" }}
            />
            <Image
              source={item.img.pic2}
              style={{ height: 5, width: "8rem" }}
            />
            <View style={{backgroundColor: '#fff', borderRadius:'100%', alignItems:'flex-end',}}>
            <EvilIcons name="arrow-right" size={30} color="black" />
            </View>
          </View>
        </View>
      )}
    />
   
  </View>
  )
}

const styles = StyleSheet.create({
   
      imagesView: {
        flex: 1,
        flexDirection: "row",
      },
    
      imagesWrapper: {
        flex: 1,
        marginTop: 20,
      },
})
export default Card
