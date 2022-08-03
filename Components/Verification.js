import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { GlobalStyle } from "./GlobalStyle";
import { Feather } from "@expo/vector-icons";

const Verification = () => {
  const [timer, setTimer] = useState(59);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        setTimer("Code expired");
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [timer]);
  return (
    <ImageBackground source={require("../assets/bg-app-cloud.png")}>
      <Text style={GlobalStyle.header}>Verification!</Text>
      <Text style={styles.header2}>
        We sent you an <span style={{ color: "#30A5BF" }}>SMS</span> code on
        number <span style={{ color: "#30A5BF" }}>+2348108960610</span>
      </Text>
      <View style={styles.inputView}>
        <TextInput keyboardType="numeric" style={styles.input} />
        <TextInput keyboardType="numeric" style={styles.input} />
        <TextInput keyboardType="numeric" style={styles.input} />
        <TextInput keyboardType="numeric" style={styles.input} />
        <TextInput keyboardType="numeric" style={styles.input} />
      </View>
      <View style={styles.timer}>
        <Text style={styles.time}>{timer}</Text>
      </View>
      <View style={{ marginHorizontal: "auto", marginVertical: 20 }}>
        <Pressable onPress={() => myInterval()}>
          <Text style={styles.resend}> Resend code </Text>
        </Pressable>
        <Pressable style={styles.arrow}>
          <Feather name="arrow-right" size={28} color="#fff" />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header2: {
    fontSize: 15,
    color: "#444",
    width: "70%",
    lineHeight: 20,
  },
  input: {
    width: "3rem",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  inputView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  timer: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
  },
  time: {
    color: "red",
  },
  arrow: {
    height: "3rem",
    backgroundColor: "#30A5BF",
    width: "3rem",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
});
export default Verification;
