import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const OnBoarding = () => {
  return (
    // <Text>Hello</Text>
    <View style={styles.screenView}>
      <Text>What kind of user are you?</Text>
      <Text>We'll adapt the app to suit your needs</Text>

      <View style={styles.userTypeContainer}>
        <View style={styles.box1}>
          <Text style={styles.text1}>Personal</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.text1}>ECommerce</Text>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  screenView: {
    backgroundColor: "#DBE4E9",
    height: "100%",
  },
  userTypeContainer: {
    left: 26,
    top: 312,
    justifyContent: "space-between",
  },
  box1: {
    justifyContent: "center",
    width: 373,
    height: 136,
    backgroundColor: "#46A5BA",
    borderRadius: 25,
  },
  text1: {
    fontSize: 39,
    // fontWeight: 700,
    lineHeight: 59,
    // letterSpacing: 0,
    textAlign: "center",
    color: "#fff",
  },
});

/**
 * background: linear-gradient(180deg, #DBE4E9 0%, #F0F0F3 100%);
 */
