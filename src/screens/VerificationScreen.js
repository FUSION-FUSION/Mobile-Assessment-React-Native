import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useRef } from "react";

const VerificationScreen = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();

  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });

  return (
    <ImageBackground
      source={require("../../assets/bg-app-cloud.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.verText}>Verification!</Text>
        <Text style={styles.verMsg}>
          We sent you an <Text style={{ color: "#46A5BA" }}>SMS</Text> code on{" "}
          <Text style={{ color: "#46A5BA" }}>+2348108960610</Text>.
        </Text>
      </View>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 1: text });
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 2: text });
              text && thirdInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 3: text });
              text && fourthInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 4: text });
              text && fifthInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fifthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 5: text });
              !text && fourthInput.current.focus();
            }}
          />
        </View>
      </View>
      <Text
        style={{
          color: "red",
          fontSize: 16,
          fontWeight: "400",
          alignSelf: "flex-end",
          marginRight: 30,
          marginTop: 14,
        }}
      >
        Code Expired
      </Text>
      <TouchableOpacity style={styles.resend}>
        <Text style={styles.resendText}>Resend</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backArrow}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    marginTop: 25,
    backgroundColor: "#46A5BA",
    alignItems: "center",
    height: 59,
    width: 59,
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 150
  },
  container: {
    flex: 1,
    backgroundColor: "#DBE4E9",
    height: 240
  },
  header: {
    marginTop: 130,
    marginHorizontal: 22,
  },
  otpBox: {
    borderRadius: 17,
    backgroundColor: "#ffffff",
    width: 57,
    height: 66,
  },
  otpContainer: {
    marginHorizontal: 22,
    // marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 28,
  },
  otpText: {
    fontSize: 25,
    color: "black",
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  resend: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  resendText: {
    color: "#1F1F1F",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
  },
  verText: {
    fontWeight: "500",
    fontSize: 28,
    color: "#484848",
    lineHeight: 39,
  },
  verMsg: {
    fontSize: 18,
    color: "#484848",
    lineHeight: 26.3,
    marginTop: 5,
    fontWeight: "300",
  },
});

export default VerificationScreen;
