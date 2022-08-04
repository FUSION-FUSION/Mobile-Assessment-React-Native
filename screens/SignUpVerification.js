import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import bgImage from '../assets/bg-app-cloud.png';

export default function SignUpVerification({ navigation, loginUser }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#cbd5e1', '#e2e8f0', '#f8fafc']}
        style={styles.container}
      >
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
          resizeMode="contain"
        />
        <View style={styles.content}>
          <Text style={styles.heading}>Verification!</Text>
          <Text style={styles.description}>
            We sent you an SMS code on number +2348133445566
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => alert('resend code')}
              activeOpacity={0.8}
              style={styles.resendBtn}
            >
              <Text style={styles.resendBtnText}>Resend Code</Text>
            </TouchableOpacity>
            <TouchableHighlight
              onPress={() => alert('Proceed')}
              activeOpacity={1}
              underlayColor="#3a8c9e"
              style={styles.proceedBtn}
            >
              <Text style={styles.proceedBtnText}>Proceed</Text>
            </TouchableHighlight>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: 350,
    position: 'absolute',
    top: 0,
  },
  content: {
    padding: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: '900',
    color: '#4b5563',
    paddingRight: 20,
    paddingTop: 50,
  },
  description: {
    fontSize: 20,
    color: '#4b5563',
    paddingRight: 20,
    marginTop: 10,
  },
  resendBtn: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4b5563',
  },
  proceedBtn: {
    width: 80,
    height: 80,
    backgroundColor: '#46a5ba',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  proceedBtnText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
});
