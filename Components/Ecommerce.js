import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Pressable
} from "react-native";
import { GlobalStyle } from "./GlobalStyle";
const inputs = [
  { title: "Business Name", key: "1", name: "fullName" },
  { title: "Official E-mail", key: "2", name: "email" },
  { title: "Contact Number", key: "3", name: "phone", placeHolder: "+123" },
  { title: "Password", key: "4", name: "password" },
  { title: "Confirm password", key: "5", name: "confirm" },
];

const Welcome = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const changeHandler = (e) => {
    setInputValue(e);
    console.log(e);
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/bg-app-cloud.png")}
    >
      <View style={{marginHorizontal: 15, marginTop: 20}}>
      <Text style={GlobalStyle.header}>Welcome!</Text>
      <Text style={styles.header2}>
        Create an account to get started with Cargo Express
      </Text>
      </View>
      <View style={styles.inputsContainer}>
        {inputs.map((input) => {
          const { title, key } = input;
          return (
            <View key={key} style={{marginHorizontal: 10}}>
              <Text style={styles.inputText}>{input.title}</Text>
              <TextInput
                style={GlobalStyle.input}
                placeholder={input.placeHolder}
                onChangeText={() => changeHandler()}
              />
            </View>
          );
        })}
        <Pressable style={GlobalStyle.paragraph} onPress={()=>navigation.navigate('sign-in')}>
        <Text>  Already have an account?
          <span style={{ color: "#30A5BF", margin:10 }}>Login</span> </Text>
        </Pressable>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnText1}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyle.btn} onPress={()=>navigation.navigate('verification')}>
            <Text style={GlobalStyle.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header2: {
    fontSize: 15,
    color: "#444",
  },
  inputsContainer: {
    marginTop: 20,
  },

  inputText: {
    marginTop: 10,
    marginBottom: 7,
  },

  btnView: {
    flexDirection: "row",
    marginVertical: 20,
  },

  btn1: {
    paddingHorizontal: 25,
    backgroundColor: "#eee",
    paddingVertical: 10,
    width: 100,
    borderRadius: 10,
    marginHorizontal: 25,
  },
  btnText1: {
    justifySelf: "center",
    color: "#444",
    fontSize: 20,
  },
});
export default Welcome;
