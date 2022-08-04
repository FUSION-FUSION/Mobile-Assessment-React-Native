import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { StatusBar as Bar } from 'expo-status-bar';

export default function TrackPercel({ route }) {
  // Get the tracking Id
  const { trackingId } = route.params;

  return (
    <View style={styles.container}>
      <Bar style="auto" />
      <Text>Track Package</Text>
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
