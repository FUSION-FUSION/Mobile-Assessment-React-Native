import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { StatusBar as Bar } from 'expo-status-bar';

export default function SendPackage(props) {
  return (
    <View style={styles.container}>
      <Bar style="auto" />
      <Text>Send Package</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});
