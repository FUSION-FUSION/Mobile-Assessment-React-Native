import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,

} from "react-native";
import { GlobalStyle } from "./GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons'; 
import Card from "./Card";



const data = [
  {
    title: "Waybill History",
    description: "Records of all your waybills",
    key: "5",
    
  },
  { title: "Get help", description: "Get help & support from our team", key: "6" },
];

const DashBoard = () => {
  return (
    <ImageBackground
      source={require("../assets/bg-app-cloud.png")}
      style={GlobalStyle.background}
    >
      <View style={styles.card}>
        <View>
          <Text>Total Balance</Text>
          <Text>₦ 50,000</Text>
        </View>
        <View style={{ position: "relative" }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.topUp}>
              Top up <AntDesign name="doubleright" size={10} color="#fff" />
            </Text>
          </TouchableOpacity>
          <Image
            source={require("../assets/bg-dashboard-balance.png")}
            style={{
              height: "6rem",
              width: "12rem",
              borderBottomRightRadius: 15,
            }}
          />
        </View>
      </View>
      <View style={styles.card1}>
        <Text style={styles.header}>Track your waybill</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="waybill number" style={styles.input} />
          <TouchableOpacity style={styles.trackBtn}>
            <Text style={styles.track}>Track</Text>
          </TouchableOpacity>
        </View>
      </View>
     <Card/>
     <View style={{marginTop:'2em'}}>
      <Text style={GlobalStyle.header}>Other actions</Text>
      <View>
        <FlatList 
        numColumns={2}
        data={data}
        renderItem={({item})=>(
          <View style={item.title === 'International'? `GlobalStyle.imagesContainer $(GlobalStyle.blur)` : GlobalStyle.imagesContainer}>
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
            <Text style={{marginTop: '.4rem', fontSize: 15}}>{item.description}</Text>
            <View style={{backgroundColor: '#fff', borderRadius:'100%', alignItems:'flex-end',}}>
            <EvilIcons name="arrow-right" size={30} color="black" />
            </View>
          </View>
        )}
        />
      </View>
     </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
    backgroundColor: "#fff",
    paddingTop: "1rem",
    borderRadius: 25,
    paddingLeft: 10,
  },
  card1: {
    marginVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingLeft: 10,
    height: "9rem",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#30A5Bf",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: "1.4rem",
    marginRight: 10,
    flexDirection: "row",
  },
  topUp: {
    color: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "400",
    marginVertical: 30,
  },
  inputContainer: {
    position: "relative",
    width: "16rem",
  },
  input: {
    border: "solid 1px #30A5Bf",
    height: "2.5rem",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  
  track: {
    color: "#ffff",
  },
  trackBtn: {
    backgroundColor: "#30A5Bf",
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: 2,
    marginRight: 4,
  },
 
});
export default DashBoard;
