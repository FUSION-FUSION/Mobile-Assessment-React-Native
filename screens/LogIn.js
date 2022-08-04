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

export default function LogIn({ navigation, loginUser }) {
  // form state
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // login and navigate to home screen (automatically)
  const login = () => {
    // Authenticate user
    // ...
    loginUser();
  };

  // navigate to signup screen (to create account)
  const signup = () => navigation.navigate('user-type-selection');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
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
          {/* Sign in Form */}
          <View style={styles.formContainer}>
            <Text style={styles.formHeading}>Sign In</Text>
            <Text style={styles.formDescription}>
              Sign in to continue to Cargo Express
            </Text>
            {/* Phone/Email */}
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Phone Number / E-mail</Text>
              <TextInput
                onChangeText={setUser}
                value={user}
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
          </View>
          {/* Create an Account? */}
          <TouchableOpacity onPress={signup} style={styles.signupLink}>
            <Text style={styles.signupLinkText}>Create an Account</Text>
          </TouchableOpacity>
          {/* Sign In Button */}
          <TouchableHighlight
            onPress={login}
            activeOpacity={1}
            underlayColor="#3a8c9e"
            style={styles.signinBtn}
          >
            <Text style={styles.signinBtnText}>Sign In</Text>
          </TouchableHighlight>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  signupLink: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupLinkText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#46a5ba',
  },
  signinBtn: {
    width: 150,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#46a5ba',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#46a5ba',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  signinBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
