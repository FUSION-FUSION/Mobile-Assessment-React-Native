import React, { useState, useRef } from 'react'
import { View, ImageBackground, StyleSheet, Text, Pressable, TextInput, Image} from "react-native";
import { Touchable } from "react-native";
import PhoneInput from "react-native-phone-number-input";



const CreateAnAccountScreen = () => {

   const [phoneNumber, setphoneNumber] = useState("");
   const phoneInput = useRef(null);


    return (
      <ImageBackground
        source={require("../../assets/bg-app-cloud.png")}
        style={styles.bigcon}
      >
        <View style={styles.container}>
          <Text style={styles.welcometext}>Welcome!</Text>
          <Text style={styles.othertext}>
            Create an account to get started with Cargo Express
          </Text>
        </View>

        <View style={styles.formcontainer}>
          <Text style={styles.formtext}>Full Name</Text>
          <TextInput style={styles.forminput} keyboardType="default" />
          <Text style={styles.formtext}>Your Email</Text>
          <TextInput style={styles.forminput} keyboardType="email-address" />
          <Text style={styles.formtext}>Phone Number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="NG"
            layout="second"
            withShadow
            autoFocus
            containerStyle={{
              height: 40,
              width: 100,
              backgroundColor: "#FDFEFF",
              borderRadius: 17,
              marginTop: 4,
              borderWidth: 1,
              borderColor: "#1F1F1F"
            }}
            textContainerStyle={{
              paddingVertical: 0,
              backgroundColor: "#FDFEFF",
              width: "100",
              borderRadius: 17
            }}
            onChangeFormattedText={(text) => {
              setphoneNumber(text);
            }}
          />
          <Text style={styles.formtext}>Password</Text>
          <TextInput style={styles.forminput} keyboardType="visible-password" />
          <Text style={styles.formtext}>Confirm Password</Text>
          <TextInput style={styles.forminput} keyboardType="visible-password" />
        </View>

        <View style={styles.bottomcontainer}>
          <Text style={styles.bottomtext}>
            Already have an account?{" "}
            <Text style={{ color: "#46A5BA" }}>Log In</Text>
          </Text>
        </View>

        <View style={styles.buttoncontainer}>
          <Pressable style={styles.backbtn}>
            <Text style={styles.backtext}>Back</Text>
          </Pressable>
          <Pressable style={styles.nextbtn}>
            <Text style={styles.nexttext}>Next</Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
  backbtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#f5f5f5",
    height: 50,
    width: 120,
    borderColor: "#fff",
  },
  backtext: {
    color: "#484848",
    fontSize: 18,
    lineHeight: 36,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  bigcon: {
    backgroundColor: "#DBE4E9",
    flex: 1,
    height: 240
  },
  bottomcontainer: {
    alignItems: "center",
    marginTop: 20,
  },
  bottomtext: {
    fontSize: 18,
    color: "#484848",
    lineHeight: 26.3,
    fontWeight: "300",
  },
  buttoncontainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  container: {
    marginTop: 130,
    paddingHorizontal: 22,
  },
  formcontainer: {
    paddingHorizontal: 22,
  },
  formtext: {
    color: "#1F1F1F",
    fontSize: 15,
    marginTop: 20,
    fontWeight: "400",
    paddingLeft: 20
  },
  forminput: {
    height: 40,
    backgroundColor: "#FDFEFF",
    borderRadius: 17,
    marginTop: 4
  },
  nextbtn: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#56A4BA",
    height: 50,
    width: 120,
  },
  nexttext: {
    fontSize: 18,
    lineHeight: 36,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  othertext: {
    fontSize: 18,
    color: "#484848",
    lineHeight: 26.3,
    marginTop: 5,
    fontWeight: "300",
  },
  welcometext: {
    fontWeight: "500",
    fontSize: 28,
    color: "#484848",
    lineHeight: 39,
  },
});

export default CreateAnAccountScreen;