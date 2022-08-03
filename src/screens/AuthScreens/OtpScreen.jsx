import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import BackGround from "../../components/BackGround";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import Timertext from "../../components/TimerText";
import CircleButton from "../../components/CircleButton";
const OtpScreen = () => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });
  const { navigate } = useNavigation();
  return (
    <BackGround>
      <View
        style={{
          marginTop: scale(60),
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            lineHeight: 40,
            fontFamily: "medium",
            fontSize: scale(24),
            width: "90%",
          }}
        >
          Verification!
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            width: "90%",
            color: "#484848",
            fontSize: scale(14),
            marginVertical: 10,
          }}
        >
          We sent you an <Text style={{ color: "#46A5BA" }}>SMS</Text> code on
          number <Text style={{ color: "#46A5BA" }}>+2348108960610</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            autoFocus={true}
            ref={pin1Ref}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(val) => {
              setPin({ ...pin, pin1: val });
              if (pin.pin2 != "") {
                pin1Ref.current.focus();
              } else if (pin.pin1 == "") {
                pin2Ref.current.focus();
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                pin1Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin2Ref}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            onFocus={() => {
              if (pin.pin1 == "") {
                pin1Ref.current.focus();
              }
            }}
            onChangeText={(val) => {
              setPin({ ...pin, pin2: val });
              if (pin.pin2 != "") {
                pin1Ref.current.focus();
              } else if (pin.pin2 == "") {
                pin3Ref.current.focus();
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                pin1Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin3Ref}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            onFocus={() => {
              if (pin.pin2 == "") {
                pin2Ref.current.focus();
              }
            }}
            onChangeText={(val) => {
              setPin({ ...pin, pin3: val });
              if (pin.pin3 != "") {
                pin2Ref.current.focus();
              } else if (pin.pin3 == "") {
                pin4Ref.current.focus();
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                pin2Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin4Ref}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            onFocus={() => {
              if (pin.pin3 == "") {
                pin3Ref.current.focus();
              }
            }}
            onChangeText={(val) => {
              setPin({ ...pin, pin4: val });
              if (pin.pin4 != "") {
                pin3Ref.current.focus();
              } else if (pin.pin4 == "") {
                pin5Ref.current.focus();
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                pin3Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin5Ref}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            onFocus={() => {
              if (pin.pin4 == "") {
                pin4Ref.current.focus();
              }
            }}
            onChangeText={(val) => {
              setPin({ ...pin, pin5: val });
              if (pin.pin5 != "") {
                pin4Ref.current.focus();
              } else if (pin.pin5 == "") {
                pin6Ref.current.focus();
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                pin4Ref.current.focus();
              }
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <Timertext />
        </View>

        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: scale(14),
            }}
          >
            Resend Code
          </Text>
        </TouchableOpacity>

        <CircleButton
          onPress={() => {
            navigate("congrats");
          }}
          style={{ alignSelf: "center", marginTop: verticalScale(30) }}
        />
      </View>
    </BackGround>
  );
};

const styles = ScaledSheet.create({
  input: {
    fontSize: 18,
    borderColor: "black",
    backgroundColor: "#D3D3D3",
    marginVertical: 10,
    borderRadius: 17,
    textAlign: "center",
    marginHorizontal: 10,
    backgroundColor: "#FDFEFF",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
export default OtpScreen;
