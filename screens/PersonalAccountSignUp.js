import React, { useState } from 'react';
import {
  View,
  ScrollView,
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

export default function PersonalAccountSignUp({ navigation }) {
  // form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  // advance to verification
  const verify = () => navigation.navigate('signup-verification');
  // navigate to login screen
  const login = () => navigation.navigate('login');
  // navigate back
  const goBack = () => navigation.goBack();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <LinearGradient
            colors={['#cbd5e1', '#e2e8f0', '#f8fafc']}
            style={styles.container}
          >
            {/* Background Image */}
            <ImageBackground
              source={bgImage}
              style={styles.bgImage}
              resizeMode="contain"
            />
            {/* Sign up Form */}
            <View style={styles.formContainer}>
              <Text style={styles.formHeading}>Welcome!</Text>
              <Text style={styles.formDescription}>
                Create an account to get started with Cargo Express
              </Text>
              {/* Name */}
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Full Name</Text>
                <TextInput
                  onChangeText={setName}
                  value={name}
                  style={styles.formInput}
                />
              </View>
              {/* Email */}
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Your E-mail</Text>
                <TextInput
                  onChangeText={setEmail}
                  value={email}
                  style={styles.formInput}
                />
              </View>
              {/* Phone */}
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Phone Number</Text>
                <TextInput
                  keyboardType="numeric"
                  onChangeText={setPhone}
                  value={phone}
                  style={styles.formInput}
                />
              </View>
              {/* Password */}
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  value={password}
                  style={styles.formInput}
                />
              </View>
              {/* Confirm Password */}
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Confirm Password</Text>
                <TextInput
                  secureTextEntry={true}
                  onChangeText={setConfirmPwd}
                  value={confirmPwd}
                  style={styles.formInput}
                />
              </View>
            </View>
            {/* Have an Account? */}
            <View style={styles.loginLinkContainer}>
              <Text style={styles.loginLinkHelpText}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={login}>
                <Text style={styles.loginLinkText}>Log In</Text>
              </TouchableOpacity>
            </View>
            {/* Next/Back Buttons */}
            <View style={styles.btnContainer}>
              <TouchableHighlight
                onPress={goBack}
                activeOpacity={1}
                underlayColor="#e2e8f0"
                style={{ ...styles.button, ...styles.backButton }}
              >
                <Text
                  style={{ ...styles.buttonText, ...styles.backButtonText }}
                >
                  Back
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={verify}
                activeOpacity={1}
                underlayColor="#3a8c9e"
                style={{ ...styles.button, ...styles.nextButton }}
              >
                <Text
                  style={{ ...styles.buttonText, ...styles.nextButtonText }}
                >
                  Next
                </Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: 350,
    position: 'absolute',
    top: 0,
  },
  formContainer: {
    padding: 30,
  },
  formHeading: {
    fontSize: 28,
    fontWeight: '900',
    color: '#4b5563',
    paddingRight: 20,
    paddingTop: 50,
  },
  formDescription: {
    fontSize: 18,
    color: '#4b5563',
    paddingRight: 20,
    marginTop: 5,
  },
  formGroup: {
    marginTop: 20,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: 5,
  },
  formInput: {
    width: '100%',
    height: 40,
    fontSize: 17,
    color: '#4b5563',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLinkHelpText: {
    fontSize: 18,
    color: '#4b5563',
  },
  loginLinkText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#46a5ba',
    marginHorizontal: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 40,
  },
  button: {
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  backButton: {
    backgroundColor: '#f1f5f9',
    borderColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
    elevation: 10,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  nextButton: {
    backgroundColor: '#46a5ba',
    borderColor: '#46a5ba',
    borderWidth: 2,
    borderStyle: 'solid',
    elevation: 10,
    shadowColor: '#46a5ba',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  backButtonText: {
    color: '#4b5563',
  },
  nextButtonText: {
    color: 'white',
  },
});
