import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import bgImage from '../assets/bg-app-cloud.png';

export default function UserTypeSelection({ navigation }) {
  // Proceed to sign-up screen
  const navigateToSignUp = () => navigation.navigate('sign-up');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
          <Text style={styles.heading}>What kind of user are you?</Text>
          <Text style={styles.description}>
            We will adapt the app to suit your needs.
          </Text>
          <TouchableHighlight
            onPress={navigateToSignUp}
            activeOpacity={1}
            underlayColor="#3a8c9e"
            style={styles.button}
          >
            <Text style={styles.buttonText}>Personal</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={navigateToSignUp}
            activeOpacity={1}
            underlayColor="#3a8c9e"
            style={styles.button}
          >
            <Text style={styles.buttonText}>E-commerce</Text>
          </TouchableHighlight>
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
    paddingTop: 100,
  },
  description: {
    fontSize: 20,
    color: '#4b5563',
    paddingRight: 20,
    marginTop: 10,
  },
  button: {
    width: '100%',
    height: 120,
    backgroundColor: '#46a5ba',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
  },
});
