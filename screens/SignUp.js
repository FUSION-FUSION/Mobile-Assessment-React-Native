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

export default function SignUp(props) {
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
          <Text>SignUp</Text>
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
});
