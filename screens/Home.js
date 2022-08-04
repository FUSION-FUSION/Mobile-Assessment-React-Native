import React, { useState } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { StatusBar as Bar } from 'expo-status-bar';
import BalanceCard from '../components/BalanceCard';
import Header from '../components/Header';
import TrackCard from '../components/TrackCard';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Bar style="auto" />
      {/* Header */}
      <Header user="John" />
      {/* Balance Card */}
      <BalanceCard balance="₦ 50,000" />
      {/* Track Waybill */}
      <TrackCard navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e9ed',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
  },
});
