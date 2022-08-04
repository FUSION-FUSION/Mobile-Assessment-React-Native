import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import bgImage from '../assets/bg-app-cloud.png';
import successImg from '../assets/account-success.png';

export default function AccountCreated({ loginUser }) {
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
          <Text style={styles.heading}>Congratulations!</Text>
          <Text style={styles.description}>
            Your account has been successfully created.
          </Text>
        </View>
        <Image source={successImg} style={styles.image} resizeMode="contain" />
        <TouchableHighlight
          onPress={loginUser}
          activeOpacity={1}
          underlayColor="#3a8c9e"
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableHighlight>
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
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  button: {
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
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
